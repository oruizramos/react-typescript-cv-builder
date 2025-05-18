import React, { useState } from 'react';
import GeneralInfoEntry from './GeneralInfoEntry';
import './GeneralInfoList.css';

interface GeneralInfo {
  name: string;
  email: string;
  phone: string;
}

const GeneralInfoList: React.FC = () => {
  const [savedInfo, setSavedInfo] = useState<GeneralInfo | null>(null);
  const [editingInfo, setEditingInfo] = useState<GeneralInfo>({
    name: '',
    email: '',
    phone: '',
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEditToggle = () => {
    if (savedInfo) {
      setEditingInfo(savedInfo); // Populate with existing info
    }
    setIsEditing(true);
  };

  const handleChange = (field: keyof GeneralInfo, value: string) => {
    setEditingInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    setSavedInfo(editingInfo);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // If there is no saved info, cancel should reset to "Add" button only
    if (!savedInfo) {
      setEditingInfo({ name: '', email: '', phone: '' });
      setIsEditing(false);
    } else {
      // Otherwise just hide the form
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    setSavedInfo(null);
    setEditingInfo({ name: '', email: '', phone: '' });
    setIsEditing(false);
  };

  return (
    <div className="general-info-list-section">
      <h2>General Information</h2>

      {isEditing ? (
        <GeneralInfoEntry
          info={editingInfo}
          onChange={handleChange}
          onSave={handleSave}
          onCancel={handleCancel}
          onDelete={handleDelete}
          isEditing={true}
          onEditToggle={handleEditToggle}
        />
      ) : savedInfo ? (
        <GeneralInfoEntry
          info={savedInfo}
          onChange={handleChange}
          onSave={handleSave}
          onCancel={handleCancel}
          onDelete={handleDelete}
          isEditing={false}
          onEditToggle={handleEditToggle}
        />
      ) : (
        <button type="button" onClick={() => setIsEditing(true)}>
          Add General Information
        </button>
      )}
    </div>
  );
};

export default GeneralInfoList;
