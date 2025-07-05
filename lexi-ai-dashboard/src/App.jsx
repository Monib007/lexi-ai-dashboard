import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from "./components/MainLayout";
import Dashboard from './pages/Dashboard';
import Workspaces from './pages/Workspaces';
import TeamManagement from './pages/TeamManagement';
import Meetings from './pages/Meetings';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="workspaces" element={<Workspaces />} />
          <Route path="team" element={<TeamManagement />} />
          <Route path="meetings" element={<Meetings />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
