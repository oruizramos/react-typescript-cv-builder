import React from 'react';
import './GeneralInfoEntry.css';

interface GeneralInfo {
  name: string;
  email: string;
  phone: string;
}

interface GeneralInfoEntryProps {
  info: GeneralInfo;
  onChange: (field: keyof GeneralInfo, value: string) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
  isEditing: boolean;
  onEditToggle: () => void;
}

const GeneralInfoEntry: React.FC<GeneralInfoEntryProps> = ({
  info,
  onChange,
  onSave,
  onCancel,
  onDelete,
  isEditing,
  onEditToggle,
}) => {
  return (
    <div className="general-info-entry-section">
      {isEditing ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={info.name}
              onChange={(e) => onChange('name', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={info.email}
              onChange={(e) => onChange('email', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={info.phone}
              onChange={(e) => onChange('phone', e.target.value)}
            />
          </div>
          <div className="form-actions">
            <button type="button" onClick={onSave}>Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      ) : (
        <div className="info-display">
          <p><strong>Name:</strong> {info.name}</p>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Phone:</strong> {info.phone}</p>
          <div className="form-actions">
            <button type="button" onClick={onEditToggle}>Edit</button>
            <button type="button" onClick={onDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneralInfoEntry;
