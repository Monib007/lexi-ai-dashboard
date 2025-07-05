// src/pages/Workspaces.jsx
import React from 'react';

const workspaces = [
  {
    id: 1,
    title: 'Marketing Team',
    description: 'Workspace for all marketing-related campaigns and tasks.'
  },
  {
    id: 2,
    title: 'Product Design',
    description: 'Figma files, design assets, and feedback loops.'
  },
  {
    id: 3,
    title: 'Engineering Sprint',
    description: 'Backend and frontend planning, reviews, and demos.'
  },
  {
    id: 4,
    title: 'Sales CRM',
    description: 'Leads, customer feedback, and performance tracking.'
  }
];

function Workspaces() {
  return (
    <div className="workspaces-page">
      <h4 className="mb-4 fw-semibold">Your Workspaces</h4>
      <div className="row g-4">
        {workspaces.map((ws) => (
          <div className="col-md-6 col-lg-4" key={ws.id}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{ws.title}</h5>
                  <p className="card-text text-muted">{ws.description}</p>
                </div>
                <div className="mt-auto text-end">
                  <button className="btn btn-sm btn-primary">
                    <i className="bi bi-box-arrow-in-right me-1"></i> Open
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workspaces;
