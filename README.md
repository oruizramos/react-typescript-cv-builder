# 📝 CV Builder (React + TypeScript)

This is a simple, modular CV Builder application built using **React** and **TypeScript**. It allows users to enter and manage their **general information**, **educational background**, and **practical work experience**, with functionality to add, edit, delete, and display form entries.

This project is part of the projects/assignments of TheOdinProject (https://www.theodinproject.com/lessons/node-path-react-new-cv-application), but since I have been learning Typescript, I thought it would be a good way to practice it here as well. I was trying to showcase:  **component-driven architecture**, **state management with hooks**, **form handling**, and **clean code practices using TypeScript**.

---

## 🚀 Live Demo

🔗 [Live on Netlify]  
💻 [View on GitHub](https://github.com/oruizramos/react-typescript-cv-builder)

---

## 🧠 Project Goals & Thought Process

The primary objective of this project was to practice and demonstrate proficiency with:

- ✅ **React components and props** for reusable, isolated sections.
- ✅ **TypeScript** for adding type safety and improving developer experience.
- ✅ **State management** using `useState` for controlling form behavior.
- ✅ **CSS modularization** to create maintainable and scoped styling.
- ✅ **Edit/Save/Cancel workflows** to mimic real-world form UX.

Each section of the CV (General Info, Education, Experience) was treated as a **self-contained unit** to maximize reusability and separation of concerns.

---

## 🛠️ Features

- ✏️ Add/Edit/Delete General Information (name, email, phone).
- 🎓 Add/Edit/Delete multiple Educational Experiences (school, title, dates).
- 💼 Add/Edit/Delete multiple Practical Experiences (company, position, responsibilities, dates).
- 💡 Input validation structure ready for extension.
- ⚙️ Local component state keeps data dynamic (no backend).

---

## 🔧 Tech Stack

- **React** with functional components and hooks
- **TypeScript** for type safety and better tooling
- **CSS Modules** for scoped, readable styling
- **Vite / Create React App** (depending on your setup)
- **Netlify** for deployment

---

## 📁 Folder Structure

src/
│
├── components/
│ ├── GeneralInfoList.tsx
│ ├── EducationList.tsx
│ ├── ExperienceList.tsx
│ ├── GeneralInfoEntry.tsx
│ ├── EducationEntry.tsx
│ └── ExperienceEntry.tsx
│ ├── App.css
│ ├── GeneralInfoEntry.css
│ ├── EducationEntry.css
│ └── ExperienceEntry.css
│
├── App.tsx
└── main.tsx / index.tsx

yaml
Copy
Edit

---

## 🔒 TypeScript Usage Highlights

- Defined reusable interfaces for `GeneralInfo`, `Education`, and `Experience` entries.
- Used `Omit<Type, 'id'>` for clean handling of new vs. existing data.
- All props passed to components are explicitly typed for safety and editor support.
- Enforced strict typing on event handlers (`React.ChangeEvent`, etc.)

```ts
interface Education {
  id: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
}

const handleSave = (newEducation: Omit<Education, 'id'>) => { ... }
🧪 Future Improvements
🧠 Add global state management (e.g., Redux or Context) if scaling up.

🌐 Integrate persistent storage (e.g., localStorage or backend).

🎨 Add drag-and-drop or section reordering.

📄 Export CV as PDF or print-ready format.

✅ Add form validation and accessibility improvements.

📦 Getting Started
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/cv-builder.git
cd cv-builder
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the development server
bash
Copy
Edit
npm run dev
# or
npm start
4. Build for production
bash
Copy
Edit
npm run build
👤 Author
Omar Alejandro Ruiz Ramos
📧 omarruizramos.gmail@.com

📄 License
This project is licensed under the MIT License.

