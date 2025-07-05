import React from "react";
import { Button, Dropdown } from "react-bootstrap";

const teamMembers = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Senior Legal Advisor",
    email: "aarav.sharma@lexiai.com",
    avatar: "https://ui-avatars.com/api/?name=Aarav+Sharma&background=343a40&color=fff"
  },
  {
    id: 2,
    name: "Priya Menon",
    role: "Paralegal",
    email: "priya.menon@lexiai.com",
    avatar: "https://ui-avatars.com/api/?name=Priya+Menon&background=6f42c1&color=fff"
  },
  {
    id: 3,
    name: "Rohan Desai",
    role: "Case Investigator",
    email: "rohan.desai@lexiai.com",
    avatar: "https://ui-avatars.com/api/?name=Rohan+Desai&background=198754&color=fff"
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    role: "Litigation Clerk",
    email: "sneha.kapoor@lexiai.com",
    avatar: "https://ui-avatars.com/api/?name=Sneha+Kapoor&background=0d6efd&color=fff"
  }
];

function TeamManagement() {
  return (
    <div className="team-page">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-semibold">Legal Team Management</h4>
        <Button variant="dark">
          <i className="bi bi-person-plus-fill me-2"></i>Add Legal Member
        </Button>
      </div>

      <div className="card shadow-sm p-3">
        <table className="table align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>Member</th>
              <th>Role</th>
              <th>Email</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member) => (
              <tr key={member.id}>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="rounded-circle"
                      width={40}
                      height={40}
                    />
                    <span>{member.name}</span>
                  </div>
                </td>
                <td>{member.role}</td>
                <td>{member.email}</td>
                <td className="text-end">
                  <Dropdown align="end">
                    <Dropdown.Toggle
                      variant="outline-secondary"
                      size="sm"
                      className="text-dark"
                    >
                      Options
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Edit Role</Dropdown.Item>
                      <Dropdown.Item>Reassign Cases</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item className="text-danger">Remove Member</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
