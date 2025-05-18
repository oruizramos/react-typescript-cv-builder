import React, { useState } from 'react';
import './ExperienceEntry.css';
import * as ExperienceListModule from './ExperienceList';
type Experience = ExperienceListModule.Experience; // Import the Experience interface

// Props for the ExperienceEntry component
interface ExperienceEntryProps {
  experience?: Experience;
  onSave?: (experience: Omit<Experience, 'id'>) => void;
  onCancel?: () => void;
  onEdit?: (id: string, experience: Omit<Experience, 'id'>) => void;
  onDelete?: (id: string) => void;
}

// State for the ExperienceEntry component
interface ExperienceEntryState {
  company: string;
  position: string;
  responsibilities: string;
  startDate: string;
  endDate: string;
  isEditing: boolean;
}

// Functional component for a single practical experience entry
const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  experience,
  onSave,
  onCancel,
  onEdit,
  onDelete,
}) => {
  // Initialize state with values from props or empty strings if it's a new entry
  const [state, setState] = useState<ExperienceEntryState>({
    company: experience?.company || '',
    position: experience?.position || '',
    responsibilities: experience?.responsibilities || '',
    startDate: experience?.startDate || '',
    endDate: experience?.endDate || '',
    isEditing: !experience, // Start in edit mode if no experience prop is provided
  });

  // Handle changes to input fields
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle saving the experience entry
  const handleSave = () => {
    if (onSave) {
      onSave({
        company: state.company,
        position: state.position,
        responsibilities: state.responsibilities,
        startDate: state.startDate,
        endDate: state.endDate,
      });
      setState((prevState) => ({ ...prevState, isEditing: false }));
    } else if (onEdit && experience?.id) {
      onEdit(experience.id, {
        company: state.company,
        position: state.position,
        responsibilities: state.responsibilities,
        startDate: state.startDate,
        endDate: state.endDate,
      });
      setState((prevState) => ({ ...prevState, isEditing: false }));
    }
  };

  // Handle going back to edit mode
  const handleEdit = () => {
    setState((prevState) => ({ ...prevState, isEditing: true }));
  };

  // Handle deleting the experience entry
  const handleDelete = () => {
    if (onDelete && experience?.id) {
      onDelete(experience.id);
    }
  };

  // Destructure values from the state for easier use in JSX
  const { company, position, responsibilities, startDate, endDate, isEditing } = state;

  return (
    <div className="experience-entry-section">
      {/* Conditional rendering based on whether we are editing or viewing */}
      {isEditing ? (
        <div className="experience-form">
          <div className="form-group">
            <label htmlFor="company">Company Name:</label>
            <input type="text" id="company" name="company" value={company} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position Title:</label>
            <input type="text" id="position" name="position" value={position} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="responsibilities">Main Responsibilities:</label>
            <textarea id="responsibilities" name="responsibilities" value={responsibilities} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date:</label>
            <input type="text" id="startDate" name="startDate" value={startDate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input type="text" id="endDate" name="endDate" value={endDate} onChange={handleChange} />
          </div>
          {/* Render save and cancel buttons if it's a new entry, otherwise just save */}
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
        <div className="experience-info">
          <p><strong>Company:</strong> {company}</p>
          <p><strong>Position:</strong> {position}</p>
          <p><strong>Responsibilities:</strong> {responsibilities}</p>
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

export default ExperienceEntry;