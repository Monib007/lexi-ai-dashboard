// src/pages/Settings.jsx

import React, { useState } from 'react';

function Settings() {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Settings saved! (not really)');
    // In real app: send formData to backend
  };

  return (
    <div className="settings-page">
      <h4 className="fw-semibold mb-4">Profile Settings</h4>
      <div className="card shadow-sm" style={{ maxWidth: '600px' }}>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="form-text">Leave blank to keep current password</div>
            </div>

            <button type="submit" className="btn btn-primary">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;
