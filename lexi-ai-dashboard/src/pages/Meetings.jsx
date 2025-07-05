import React, { useState } from 'react';

function Meetings() {
  const [meetings, setMeetings] = useState([
    { id: 1, title: 'Sprint Planning', date: '2025-07-06', time: '10:00 AM' },
    { id: 2, title: 'UI Review', date: '2025-07-08', time: '2:00 PM' }
  ]);

  const [formData, setFormData] = useState({ title: '', date: '', time: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newMeeting = {
      id: meetings.length + 1,
      ...formData
    };
    setMeetings(prev => [...prev, newMeeting]);
    setFormData({ title: '', date: '', time: '' }); // reset form
  };

  return (
    <div className="meetings-page">
      <h4 className="fw-semibold mb-4">Meetings</h4>

      {/* Meetings List */}
      <div className="mb-5">
        <h6 className="mb-3">Upcoming Meetings</h6>
        <ul className="list-group">
          {meetings.map(meeting => (
            <li key={meeting.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{meeting.title}</strong>
                <div className="text-muted">{meeting.date} at {meeting.time}</div>
              </div>
              <button className="btn btn-sm btn-outline-danger">
                <i className="bi bi-x-lg"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Add New Meeting */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h6 className="card-title mb-3">Add New Meeting</h6>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Meeting Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Add Meeting</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Meetings;
