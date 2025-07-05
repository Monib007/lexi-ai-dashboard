import React from 'react';

const team = [
  {
    id: 1,
    name: "Ayesha Kapoor",
    role: "Product Designer",
    online: true,
    avatar: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 2,
    name: "Rohan Das",
    role: "Backend Engineer",
    online: false,
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    id: 3,
    name: "Neha Verma",
    role: "Frontend Developer",
    online: true,
    avatar: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  {
    id: 4,
    name: "Arjun Rao",
    role: "QA Analyst",
    online: false,
    avatar: "https://randomuser.me/api/portraits/men/48.jpg"
  }
];

function TeamStatus() {
  return (
    <div className="mt-5">
      <h5 className="mb-4 fw-semibold">Team Status</h5>
      <div className="row g-4">
        {team.map(member => (
          <div key={member.id} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card shadow-sm border-0">
              <div className="card-body d-flex align-items-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="rounded-circle me-3"
                  width="50"
                  height="50"
                />
                <div>
                  <h6 className="mb-0">{member.name}</h6>
                  <small className="text-muted">{member.role}</small>
                </div>
                <span
                  className={`ms-auto badge rounded-pill ${
                    member.online ? 'bg-success' : 'bg-secondary'
                  }`}
                >
                  {member.online ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamStatus;
