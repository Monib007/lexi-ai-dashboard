# 🧠 LeXi AI Dashboard

A responsive and modern legal case management dashboard built for litigation teams. Designed to simplify workspace creation, case tracking, team collaboration, billing, and admin communication.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── CaseDetailsForm.jsx
│   ├── CaseDetailsModal.jsx
│   ├── MainLayout.jsx
│   ├── NewCaseForm.jsx
│   ├── Sidebar.jsx
│   ├── Topbar.jsx
│   └── WorkspaceGrid.jsx
│
├── context/
│   └── SidebarContext.jsx
│
├── pages/
│   ├── Billings.jsx
│   ├── ContactAdmin.jsx
│   ├── NotFound.jsx
│   ├── Settings.jsx
│   ├── TeamManagement.jsx
│   ├── WorkspaceDetails.jsx
│   └── Workspaces.jsx
│
└── App.jsx
```
---

## 🚀 Features

- 📁 **Workspaces**  
  View, filter, and create workspaces for legal teams and case tracking.

- 🧾 **Case Management**  
  Add new cases, edit details, and organize case data like complainants, accused, summaries, and tags.

- 👥 **Team Management**  
  Manage paralegals, lawyers, and legal researchers involved in each workspace.

- 💳 **Billing & Plans**  
  Track your current subscription plan and upgrade options for adding more cases/workspaces.

- 📬 **Contact Admin**  
  A built-in support/help center allowing users to reach out for internal or legal-tech support.

- 📱 **Responsive UI**  
  Optimized for both desktop and mobile devices with an off-canvas sidebar and clean Bootstrap 5 layout.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (with Vite)
- **Styling:** Bootstrap 5 + Bootstrap Icons
- **Routing:** React Router DOM
- **State Management:** React Context API (`SidebarContext`)
- **Charts (if needed later):** Chart.js + react-chartjs-2 *(currently not in use)*

---

## 🖥️ Setup Instructions

### 1. Clone the Repository

git clone https://github.com/your-username/lexi-ai-dashboard.git
cd lexi-ai-dashboard

### 2. Install Dependencies
npm install

### 3. Start Development Server
npm run dev

Visit [http://localhost:5173](http://localhost:5173) to view the app.

---

## 📸 Screenshots

![Screenshot 2025-07-05 161659](https://github.com/user-attachments/assets/f5163073-b5eb-44d5-b3d2-08765d2d9e2b)
![Screenshot 2025-07-05 161920](https://github.com/user-attachments/assets/fc3b90ac-3b9b-46bc-a913-d47c8c71591a)


| Workspaces | Case Details | Team Management |
|------------|--------------|-----------------|
| ![](https://via.placeholder.com/400x250?text=Workspaces) | ![](https://via.placeholder.com/400x250?text=Case+Details) | ![](https://via.placeholder.com/400x250?text=Team) |

---

## 🧑‍💼 About

Built by **Monib Kumar Singha**  
Focus: Legal-Tech, Smart Case Management, and AI-Powered Litigation Tools
