import React from 'react';

const cardData = [
  {
    title: "Total Meetings",
    value: 76,
    icon: "bi-camera-video",
    bg: "bg-primary"
  },
  {
    title: "Upcoming Meetings",
    value: 14,
    icon: "bi-calendar-event",
    bg: "bg-success"
  },
  {
    title: "Active Workspaces",
    value: 5,
    icon: "bi-kanban",
    bg: "bg-warning text-dark"
  },
  {
    title: "Team Members",
    value: 18,
    icon: "bi-people",
    bg: "bg-info text-dark"
  },
];

function DashboardCards() {
  return (
    <div className="row g-4">
      {cardData.map((card, index) => (
        <div key={index} className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0">
            <div className="card-body d-flex align-items-center justify-content-between">
              <div>
                <h6 className="card-title text-muted">{card.title}</h6>
                <h3 className="fw-bold">{card.value}</h3>
              </div>
              <div className={`rounded-circle d-flex justify-content-center align-items-center ${card.bg}`} style={{ width: "45px", height: "45px" }}>
                <i className={`bi ${card.icon} text-white`}></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;
