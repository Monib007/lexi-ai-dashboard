// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';

function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <div
      className={`d-flex flex-column position-fixed top-0 start-0 bg-dark text-white p-3 ${
        isOpen ? 'd-flex' : 'd-none d-md-flex'
      }`}
      style={{ width: '240px', height: '100vh', zIndex: 1030 }}
    >
      {/* Logo */}
      <div className="mb-4 ps-2">
        <h5 className="fw-bold mb-0">LeXi Ai</h5>
      </div>

      {/* Navigation Items */}
      <ul className="nav flex-column gap-1 mb-auto">
        <li>
          <NavLink
            to="/workspaces"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center px-3 py-2 rounded ${
                isActive ? 'bg-light text-dark fw-semibold' : 'text-white'
              }`
            }
          >
            <i className="bi bi-grid-3x3-gap me-2"></i> Workspaces
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center px-3 py-2 rounded ${
                isActive ? 'bg-light text-dark fw-semibold' : 'text-white'
              }`
            }
          >
            <i className="bi bi-people me-2"></i> Team Management
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/billings"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center px-3 py-2 rounded ${
                isActive ? 'bg-light text-dark fw-semibold' : 'text-white'
              }`
            }
          >
            <i className="bi bi-credit-card me-2"></i> Billings & Plans
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center px-3 py-2 rounded ${
                isActive ? 'bg-light text-dark fw-semibold' : 'text-white'
              }`
            }
          >
            <i className="bi bi-gear me-2"></i> Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center px-3 py-2 rounded ${
                isActive ? 'bg-light text-dark fw-semibold' : 'text-white'
              }`
            }
          >
            <i className="bi bi-chat-dots me-2"></i> Contact Admin
          </NavLink>
        </li>
      </ul>

      {/* Optional Footer: Logout */}
      <div className="pt-3 border-top">
        <NavLink
          to="/"
          className="nav-link d-flex align-items-center px-3 py-2 text-danger"
        >
          <i className="bi bi-box-arrow-right me-2"></i> Sign Out
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
