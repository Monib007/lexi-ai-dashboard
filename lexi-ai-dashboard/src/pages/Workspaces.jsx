// src/pages/Workspaces.jsx
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Workspaces() {
  const [view, setView] = useState("grid");

  const workspaces = [
    {
      id: 1,
      name: "Johnson & Partners Merger",
      client: "Johnson & Partners LLP",
      type: "Criminal",
      created: "2025-05-02",
      lastActive: "2 hours ago",
      documentsProcessed: 12,
      statuses: ["3 Drafts", "In Review", "Completed"],
      members: ["JD", "SC", "NK", "RJ"],
    },
  ];

  return (
    <div>
      <h4 className="fw-semibold mb-4">Dashboard Overview</h4>

      {/* Filters & Actions */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Workspace / Client"
            style={{ maxWidth: 250 }}
          />
          <select className="form-select"><option>All Types</option></select>
          <select className="form-select"><option>All Status</option></select>
        </div>

        <div className="d-flex gap-2">
          <Button variant="dark">+ Create New Workspace</Button>
          <Button
            variant={view === "grid" ? "primary" : "outline-secondary"}
            onClick={() => setView("grid")}
          >
            <i className="bi bi-grid-fill"></i>
          </Button>
          <Button
            variant={view === "list" ? "primary" : "outline-secondary"}
            onClick={() => setView("list")}
          >
            <i className="bi bi-list"></i>
          </Button>
        </div>
      </div>

      {/* Grid View */}
      {view === "grid" && (
        <div className="row g-4">
          {workspaces.map((ws) => (
            <div className="col-md-4" key={ws.id}>
              <div className="card shadow-sm p-3">
                <span className="badge bg-primary mb-2">{ws.type}</span>
                <h6>{ws.name}</h6>
                <p className="text-muted">{ws.client}</p>
                <ul className="list-unstyled small mb-2">
                  <li><i className="bi bi-calendar me-2"></i>Created: {ws.created}</li>
                  <li><i className="bi bi-clock me-2"></i>Last Active: {ws.lastActive}</li>
                  <li><i className="bi bi-file-earmark-text me-2"></i>{ws.documentsProcessed} documents processed</li>
                </ul>
                <div className="d-flex gap-1 flex-wrap mb-2">
                  {ws.statuses.map((s, i) => (
                    <span key={i} className="badge bg-light text-dark border">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="d-flex gap-2 mb-3">
                  {ws.members.map((m, i) => (
                    <div
                      key={i}
                      className="bg-secondary text-white rounded-circle text-center"
                      style={{ width: 30, height: 30, lineHeight: "30px", fontSize: "0.75rem" }}
                    >
                      {m}
                    </div>
                  ))}
                </div>
                <Button size="sm" variant="outline-dark" className="w-100">Open</Button>
              </div>
            </div>
          ))}

          {/* Upgrade Card */}
          <div className="col-md-4">
            <div className="card border-dashed text-center p-4 h-100 d-flex align-items-center justify-content-center bg-light">
              <p className="mb-2">Upgrade to add more litigation cases</p>
              <Button variant="dark">
                <i className="bi bi-plus-circle me-1"></i> Upgrade Plan
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* List View */}
      {view === "list" && (
        <div className="card shadow-sm p-4">
          {/* Implement table version later if needed */}
          <p>List view coming soon...</p>
        </div>
      )}
    </div>
  );
}

export default Workspaces;
