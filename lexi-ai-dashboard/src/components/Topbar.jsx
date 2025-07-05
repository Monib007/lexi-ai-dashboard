import React from 'react';

function Topbar() {
  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom bg-white" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      {/* Search Bar */}
      <form className="d-flex" role="search" style={{ width: '300px' }}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>

      {/* Right side icons */}
      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-bell fs-5"></i>
        <img
          src="https://via.placeholder.com/35"
          alt="Profile"
          className="rounded-circle"
          width="35"
          height="35"
        />
      </div>
    </div>
  );
}

export default Topbar;
