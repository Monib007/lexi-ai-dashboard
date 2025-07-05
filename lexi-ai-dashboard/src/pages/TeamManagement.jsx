// src/pages/TeamManagement

import React from 'react';

const teamMembers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Project Manager' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Frontend Developer' },
  { id: 3, name: 'Carol Lee', email: 'carol@example.com', role: 'UX Designer' },
  { id: 4, name: 'David Miller', email: 'david@example.com', role: 'Backend Developer' }
];

function TeamManagement() {
  return (
    <div className="team-management-page">
      <h4 className="fw-semibold mb-4">Team Members</h4>
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map(member => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.role}</td>
                <td className="text-center">
                  <button className="btn btn-sm btn-outline-primary me-2">
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeamManagement;
