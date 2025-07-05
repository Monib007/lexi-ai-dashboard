import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext";

import MainLayout from "./components/MainLayout";
import Workspaces from "./pages/Workspaces";
import TeamManagement from "./pages/TeamManagement";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import WorkspaceDetails from "./pages/WorkspaceDetails";
import Billings from "./pages/Billings";
import ContactAdmin from "./pages/ContactAdmin";

function App() {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="workspaces" element={<Workspaces />} />
            <Route path="team" element={<TeamManagement />} />
            <Route path="billings" element={<Billings />} />
            <Route path="contact" element={<ContactAdmin />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
            <Route path="workspaces/:id" element={<WorkspaceDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
