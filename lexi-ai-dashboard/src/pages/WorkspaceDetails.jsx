import React, { useState } from 'react';
import WorkspaceGrid from '../components/WorkspaceGrid';
import NewCaseForm from '../components/NewCaseForm';

function WorkspaceDetails() {
  const [showForm, setShowForm] = useState(false);
  const [cases, setCases] = useState([
    {
      id: 1,
      title: "Case 1",
      tags: ["Contract Dispute", "Civil"],
      status: "Analyzed"
    },
    {
      id: 2,
      title: "Case 2",
      tags: ["Property Fraud", "Criminal"],
      status: "Pending"
    },
    {
      id: 3,
      title: "Case 3",
      tags: ["Intellectual Property"],
      status: "Analyzed"
    }
  ]);

  const handleAddCase = (newCase) => {
    setCases((prev) => [newCase, ...prev]);
    setShowForm(false);
  };

  return (
    <div className="workspace-details-page">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-semibold">Workspace Details</h4>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          <i className="bi bi-plus-circle me-2"></i> New Case
        </button>
      </div>

      {/* Case Form or Case Grid */}
      {showForm ? (
        <NewCaseForm
          onSave={handleAddCase}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <WorkspaceGrid cases={cases} onNewCase={() => setShowForm(true)} />
      )}
    </div>
  );
}

export default WorkspaceDetails;
