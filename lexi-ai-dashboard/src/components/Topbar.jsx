import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

function Topbar() {
  const location = useLocation();
  const pageTitle = {
    '/': 'Dashboard',
    '/workspaces': 'Workspaces',
    '/team': 'Team Management',
    '/analytics': 'Analytics',
    '/settings': 'Settings',
    '/billing': 'Billing & Plans',
    '/contact': 'Contact Admin'
  }[location.pathname] || 'LeXi AI';

  return (
    <nav className="navbar navbar-expand bg-white border-bottom px-4 py-2 shadow-sm">
      <div className="container-fluid justify-content-between align-items-center">
        
        {/* Left: Page Title */}
        <h5 className="mb-0 fw-semibold text-dark">{pageTitle}</h5>

        {/* Right: Icons */}
        <div className="d-flex align-items-center gap-3">

          {/* Notification Icon */}
          <button className="btn btn-outline-secondary position-relative rounded-circle">
            <i className="bi bi-bell fs-5"></i>
            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-white rounded-circle">
              <span className="visually-hidden">New alerts</span>
            </span>
          </button>

          {/* User Avatar Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary d-flex align-items-center gap-2"
              id="dropdownUser"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://i.pravatar.cc/35"
                alt="avatar"
                width="35"
                height="35"
                className="rounded-circle"
              />
              <span className="d-none d-md-inline fw-medium">Admin</span>
              <i className="bi bi-chevron-down d-none d-md-inline"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser">
              <li><NavLink className="dropdown-item" to="/settings"><i className="bi bi-gear me-2"></i> Settings</NavLink></li>
              <li><NavLink className="dropdown-item" to="/contact"><i className="bi bi-headset me-2"></i> Contact Admin</NavLink></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item text-danger" href="#"><i className="bi bi-box-arrow-right me-2"></i> Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
