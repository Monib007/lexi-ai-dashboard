import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{ height: '80vh' }}>
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="fs-4 mb-3 text-muted">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-outline-primary">
        <i className="bi bi-arrow-left-circle me-2"></i> Go to Dashboard
      </Link>
    </div>
  );
}

export default NotFound;
