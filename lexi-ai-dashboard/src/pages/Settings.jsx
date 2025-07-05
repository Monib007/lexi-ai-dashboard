import React from "react";
import { Form, Button } from "react-bootstrap";

function Settings() {
  return (
    <div className="settings-page">
      <h4 className="fw-semibold mb-4">Settings</h4>

      {/* Profile Settings */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="mb-3">Profile Information</h5>
          <Form>
            <div className="row g-3">
              <div className="col-md-6">
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="John" />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Doe" />
                </Form.Group>
              </div>
              <div className="col-md-12">
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="john.doe@lexiai.com" />
                </Form.Group>
              </div>
            </div>
            <div className="mt-3 text-end">
              <Button variant="primary">Save Changes</Button>
            </div>
          </Form>
        </div>
      </div>

      {/* Preferences */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="mb-3">Preferences</h5>
          <Form>
            <Form.Check
              type="switch"
              id="notifications"
              label="Email Notifications for Case Updates"
              defaultChecked
            />
            <Form.Check
              type="switch"
              id="darkMode"
              label="Enable Dark Mode"
            />
          </Form>
        </div>
      </div>

      {/* Password Section */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="mb-3">Change Password</h5>
          <Form>
            <div className="row g-3">
              <div className="col-md-6">
                <Form.Group controlId="currentPassword">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="newPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
              </div>
            </div>
            <div className="mt-3 text-end">
              <Button variant="secondary">Update Password</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Settings;
