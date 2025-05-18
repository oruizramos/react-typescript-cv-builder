import React, { useState } from 'react';
import ExperienceEntry from './ExperienceEntry';
import './ExperienceList.css';

// Interface for a single work experience entry
export interface Experience { // Add the 'export' keyword here
  id: string;
  company: string;
  position: string;
  responsibilities: string;
  startDate: string;
  endDate: string;
}

// Props for the ExperienceList component
interface ExperienceListProps {}

// Functional component for the list of practical experiences
const ExperienceList: React.FC<ExperienceListProps> = () => {
  // State to hold the array of experience entries
  const [experienceEntries, setExperienceEntries] = useState<Experience[]>([]);
  // State to control whether the "add new" form is visible
  const [isAddingNew, setIsAddingNew] = useState<boolean>(false);

  // Function to show the "add new" form
  const handleAddExperience = () => {
    setIsAddingNew(true);
  };

  // Function to save a new experience entry
  const handleSaveNewExperience = (newExperience: Omit<Experience, 'id'>) => {
    setExperienceEntries((prevEntries) => [
      ...prevEntries,
      { ...newExperience, id: Date.now().toString() },
    ]);
    setIsAddingNew(false);
  };

  // Function to cancel adding a new experience entry
  const handleCancelNewExperience = () => {
    setIsAddingNew(false);
  };

  // Function to handle editing an existing experience entry
  const handleEditExperience = (id: string, updatedExperience: Omit<Experience, 'id'>) => {
    setExperienceEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id ? { ...entry, ...updatedExperience } : entry
      )
    );
  };

  // Function to handle deleting an experience entry
  const handleDeleteExperience = (id: string) => {
    setExperienceEntries((prevEntries) =>
      prevEntries.filter((entry) => entry.id !== id)
    );
  };

  return (
    <div className="experience-list-section">
      <h2>Practical Experience</h2>
      {/* Map through the experience entries and render an ExperienceEntry component for each */}
      {experienceEntries.map((experience) => (
        <ExperienceEntry
          key={experience.id}
          experience={experience}
          onEdit={handleEditExperience}
          onDelete={handleDeleteExperience}
        />
      ))}
      {/* Conditionally render either the "add new" form or the "Add Experience" button */}
      {isAddingNew ? (
        <ExperienceEntry
          onSave={handleSaveNewExperience}
          onCancel={handleCancelNewExperience}
        />
      ) : (
        <button type="button" onClick={handleAddExperience}>Add Experience</button>
      )}
    </div>
  );
};

export default ExperienceList;