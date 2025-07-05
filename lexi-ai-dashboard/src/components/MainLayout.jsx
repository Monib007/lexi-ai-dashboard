// src/components/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function MainLayout() {
  return (
    <div className="d-flex">
      {/* Offcanvas Sidebar for small screens */}
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabIndex="-1"
        id="sidebarOffcanvas"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">LeXi Ai</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          <Sidebar />
        </div>
      </div>

      {/* Fixed Sidebar on md and up */}
      <div
        className="d-none d-md-block bg-dark text-white"
        style={{
          width: '250px',
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          overflowY: 'auto',
          zIndex: 1030,
        }}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div
        className="flex-grow-1"
        style={{ marginLeft: '0', marginTop: '0', width: '100%' }}
      >
        {/* Mobile Topbar with toggle button */}
        <div className="d-md-none d-flex justify-content-between align-items-center px-3 py-2 bg-dark text-white">
          <button
            className="btn btn-outline-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarOffcanvas"
          >
            <i className="bi bi-list"></i>
          </button>
          <span className="fw-semibold">LeXi Ai</span>
        </div>

        {/* Topbar (visible always) */}
        <div style={{ marginLeft: '250px' }} className="d-none d-md-block">
          <Topbar />
        </div>
        <div className="d-md-none">
          <Topbar />
        </div>

        {/* Routed Content */}
        <div
          className="p-4"
          style={{ marginLeft: '250px' }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
