import React, { useState } from 'react';
import './EducationEntry.css';
import * as EducationListModule from './EducationList';
type Education = EducationListModule.Education; // Import the Education interface

interface EducationEntryProps {
  education?: Education;
  onSave?: (education: Omit<Education, 'id'>) => void;
  onCancel?: () => void;
  onEdit?: (id: string, education: Omit<Education, 'id'>) => void;
  onDelete?: (id: string) => void;
}

interface EducationEntryState {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  isEditing: boolean;
}

const EducationEntry: React.FC<EducationEntryProps> = ({
  education,
  onSave,
  onCancel,
  onEdit,
  onDelete,
}) => {
  const [state, setState] = useState<EducationEntryState>({
    school: education?.school || '',
    degree: education?.degree || '',
    startDate: education?.startDate || '',
    endDate: education?.endDate || '',
    isEditing: !education, // If no education prop, we are adding new, so start in edit mode
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave({
        school: state.school,
        degree: state.degree,
        startDate: state.startDate,
        endDate: state.endDate,
      });
      setState((prevState) => ({ ...prevState, isEditing: false }));
    } else if (onEdit && education?.id) {
      onEdit(education.id, {
        school: state.school,
        degree: state.degree,
        startDate: state.startDate,
        endDate: state.endDate,
      });
      setState((prevState) => ({ ...prevState, isEditing: false }));
    }
  };

  const handleEdit = () => {
    setState((prevState) => ({ ...prevState, isEditing: true }));
  };

  const handleDelete = () => {
    if (onDelete && education?.id) {
      onDelete(education.id);
    }
  };

  const { school, degree, startDate, endDate, isEditing } = state;

  return (
    <div className="education-entry-section">
      {isEditing ? (
        <div className="education-form">
          <div className="form-group">
            <label htmlFor="school">School Name:</label>
            <input type="text" id="school" name="school" value={school} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="degree">Title of Study:</label>
            <input type="text" id="degree" name="degree" value={degree} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date:</label>
            <input type="text" id="startDate" name="startDate" value={startDate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input type="text" id="endDate" name="endDate" value={endDate} onChange={handleChange} />
          </div>
          {onSave && onCancel ? (
            <div className="form-actions">
              <button type="button" onClick={handleSave}>Save</button>
              <button type="button" onClick={onCancel}>Cancel</button>
            </div>
          ) : (
            <div className="form-actions">
              <button type="button" onClick={handleSave}>Save</button>
            </div>
          )}
        </div>
      ) : (
        <div className="education-info">
          <p><strong>School:</strong> {school}</p>
          <p><strong>Degree:</strong> {degree}</p>
          <p><strong>Dates:</strong> {startDate} - {endDate}</p>
          <div className="actions">
            <button type="button" onClick={handleEdit}>Edit</button>
            <button type="button" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationEntry;