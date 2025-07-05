import React from 'react';

function WorkspaceGrid({ cases, onNewCase }) {
  return (
    <div className="workspace-grid">
      <div className="row g-4">
        {/* Add Case Card */}
        <div className="col-md-4">
          <div
            className="card h-100 border-dashed d-flex align-items-center justify-content-center text-center bg-light cursor-pointer"
            onClick={onNewCase}
            style={{ border: '2px dashed #ccc', minHeight: '160px' }}
          >
            <div>
              <i className="bi bi-plus-circle fs-1 text-muted"></i>
              <p className="mt-2 mb-0 text-muted">Add New Case</p>
            </div>
          </div>
        </div>

        {/* Existing Cases */}
        {cases.map((c) => (
          <div className="col-md-4" key={c.id}>
            <div className="card shadow-sm h-100 hover-shadow border-0">
              <div className="card-body">
                <h5 className="card-title">{c.title}</h5>
                <div className="mb-2">
                  {c.tags.map((tag, i) => (
                    <span className="badge text-bg-secondary me-1" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <span
                    className={`badge ${
                      c.status === "Analyzed"
                        ? "text-bg-success"
                        : "text-bg-warning"
                    }`}
                  >
                    {c.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkspaceGrid;
