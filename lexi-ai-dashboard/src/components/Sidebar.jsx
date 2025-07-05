
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '250px', height: '100vh' }}>
      <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">LeXi Ai</span>
      </NavLink>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link text-white ${isActive ? 'fw-bold bg-secondary' : ''}`}
          >
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/workspaces"
            className={({ isActive }) => `nav-link text-white ${isActive ? 'fw-bold bg-secondary' : ''}`}
          >
            <i className="bi bi-folder me-2"></i> Workspaces
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/team"
            className={({ isActive }) => `nav-link text-white ${isActive ? 'fw-bold bg-secondary' : ''}`}
          >
            <i className="bi bi-people me-2"></i> Team Management
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/meetings"
            className={({ isActive }) => `nav-link text-white ${isActive ? 'fw-bold bg-secondary' : ''}`}
          >
            <i className="bi bi-camera-video me-2"></i> Meetings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/analytics"
            className={({ isActive }) => `nav-link text-white ${isActive ? 'fw-bold bg-secondary' : ''}`}
          >
            <i className="bi bi-graph-up me-2"></i> Analytics
          </NavLink>
        </li>
      </ul>
      <hr />
      <div>
        <NavLink
          to="/settings"
          className={({ isActive }) => `nav-link text-white ${isActive ? 'fw-bold bg-secondary' : ''}`}
        >
          <i className="bi bi-gear me-2"></i> Settings
        </NavLink>
        <NavLink
          to="/"
          className="nav-link text-white mt-2"
        >
          <i className="bi bi-box-arrow-right me-2"></i> Logout
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
