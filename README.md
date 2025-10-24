# 📇 Contact List Web App

A modern, interactive **Contact Management Application** built with **React.js**, designed to efficiently manage, search, and visualize your contact data.
It features **smooth animations**, **dark/light themes**, and a **blue-themed futuristic UI** — making contact management both functional and visually delightful.

---

## 🚀 Features

* ✨ **Dynamic Entry Animation** — The app starts with a beautiful **initial load animation** that smoothly transitions into the main interface.
* 🎞️ **Scroll-Based Animations** — Components fade or slide into view as you scroll, powered by Framer Motion.
* ⌨️ **Mechanical Keyboard Typing Effect** — The search bar animates like a **mechanical keyboard**, with tactile key-press motion for an immersive experience.
* 🔍 **Search & Filter Contacts** — Quickly find and manage contacts in real time.
* ➕ **Add New Contacts** — Add entries interactively with animated transitions.
* 🌓 **Night Mode** — Switch between **light and dark themes** with an animated **night-mode toggle button** for a sleek visual transition.
* 💾 **JSON-Based Data** — Contacts are fetched from and saved to a **JSON file** located in the `/public` folder.
* 🌈 **Blue Theme & Favicon** — Consistent blue color palette with a custom **favicon** to enhance brand identity.
* 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile views.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS
* **Animation Library:** Framer Motion
* **Data Handling:** JSON (stored in `/public/contacts.json`)
* **Theme Handling:** Custom React State with Animated Toggle
* **Package Manager:** npm

---

## ⚙️ Setup Instructions

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/parikshitdave14/Tria_assignment.git](https://github.com/parikshitdave14/Tria_assignment.git)
    cd Tria_assignment
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run the Application**
    ```bash
    npm run dev
    ```
    Then open your browser and visit:
    👉 `http://localhost:8080/` (or whichever port appears in your terminal).

---

## 🌐 Live Demo

🔗 **Deployed App:** [https://tria-assignment-psi.vercel.app](https://tria-assignment-psi.vercel.app)

---

## 💡 Design Choices & Assumptions

* **🎬 Initial Animation:**
    When the app launches, a soft fade-in and scale-up animation introduces the interface, giving a premium feel.
* **💨 Scroll Animations:**
    Contact cards and sections appear with slide animations as users scroll from the left and right sides of the screen alternatively.
* **⌨️ Search Bar Typing Motion:**
    Simulates mechanical key presses using animation, enhancing engagement.
* **🌌 Blue Theme + Night Mode:**
    * Default UI uses a cool blue palette symbolizing clarity and calmness.
    * Night Mode introduces darker hues with smooth transitions.
    * Toggle button includes an animated moon/sun morphing effect.
* **📄 Data Source:**
    All contacts are stored in `/public/contacts.json` for quick front-end operations.
    (Backend can be added later for permanent storage.)
* **🏷️ Favicon Integration:**
    A custom favicon reinforces app identity and improves aesthetics.
* **🧭 UI/UX Philosophy:**
    Clean, minimal, animated, and responsive — designed to feel fast and intuitive while showcasing smooth motion effects.

---

## 📚 Libraries Used

| Library | Purpose |
| :--- | :--- |
| **React.js** | Component-based UI framework |
| **Tailwind CSS** | Utility-first styling framework |
| **Framer Motion** | For animations and transitions |
| **React Icons** | Icon library for clarity and design consistency |

---

## 🧠 Future Improvements

* 🔄 Add backend API integration for real contact persistence.
* 👥 Add grouping and sorting features.
* 🔔 Include notifications or reminders for contacts.
* 📤 Enable data export/import as `.csv` or `.json`.

---

## 👨‍💻 Author

**Parikshit Dave**
📍 IIT Kharagpur
<br>
💼 [GitHub](https://github.com/parikshitdave14) | [LinkedIn](https://linkedin.com/in/parikshit-dave-ba2983257/)
