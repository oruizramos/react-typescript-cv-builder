import React, { useState } from 'react';
import EducationEntry from './EducationEntry';
import './EducationList.css';

export interface Education { 
  id: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
}

interface EducationListProps {}

const EducationList: React.FC<EducationListProps> = () => {
  const [educationEntries, setEducationEntries] = useState<Education[]>([]);
  const [isAddingNew, setIsAddingNew] = useState<boolean>(false);

  const handleAddEducation = () => {
    setIsAddingNew(true);
  };

  const handleSaveNewEducation = (newEducation: Omit<Education, 'id'>) => {
    setEducationEntries((prevEntries) => [
      ...prevEntries,
      { ...newEducation, id: Date.now().toString() },
    ]);
    setIsAddingNew(false);
  };

  const handleCancelNewEducation = () => {
    setIsAddingNew(false);
  };

  const handleEditEducation = (id: string, updatedEducation: Omit<Education, 'id'>) => {
    setEducationEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id ? { ...entry, ...updatedEducation } : entry
      )
    );
  };

  const handleDeleteEducation = (id: string) => {
    setEducationEntries((prevEntries) =>
      prevEntries.filter((entry) => entry.id !== id)
    );
  };

  return (
    <div className="education-list-section">
      <h2>Educational Experience</h2>
      {educationEntries.map((education) => (
        <EducationEntry
          key={education.id}
          education={education}
          onEdit={handleEditEducation}
          onDelete={handleDeleteEducation}
        />
      ))}
      {isAddingNew ? (
        <EducationEntry
          onSave={handleSaveNewEducation}
          onCancel={handleCancelNewEducation}
        />
      ) : (
        <button type="button" onClick={handleAddEducation}>Add Education</button>
      )}
    </div>
  );
};

export default EducationList;