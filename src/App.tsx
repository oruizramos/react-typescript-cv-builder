import GeneralInfoList from './components/GeneralInfoList';
import EducationList from './components/EducationList';
import ExperienceList from './components/ExperienceList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>CV Builder</h1>
      <GeneralInfoList />
      <EducationList />
      <ExperienceList />
    </div>
  );
}

export default App;