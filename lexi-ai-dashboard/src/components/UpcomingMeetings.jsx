import React from 'react';

const meetings = [
  {
    id: 1,
    title: "Design Sync with UI Team",
    time: "Today, 11:00 AM",
    type: "Zoom",
    icon: "bi-camera-video"
  },
  {
    id: 2,
    title: "Project Review - Alpha Build",
    time: "Tomorrow, 9:30 AM",
    type: "Google Meet",
    icon: "bi-camera-video"
  },
  {
    id: 3,
    title: "Sprint Planning",
    time: "Wed, 3:00 PM",
    type: "In-Person",
    icon: "bi-geo-alt"
  }
];

function UpcomingMeetings() {
  return (
    <div className="mt-5">
      <h5 className="mb-4 fw-semibold">Upcoming Meetings</h5>
      <div className="list-group">
        {meetings.map((meeting) => (
          <div key={meeting.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">{meeting.title}</h6>
              <small className="text-muted">{meeting.time}</small>
            </div>
            <div className="text-end">
              <span className="badge bg-light text-dark me-2">{meeting.type}</span>
              <i className={`bi ${meeting.icon} fs-5 text-secondary`}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingMeetings;
