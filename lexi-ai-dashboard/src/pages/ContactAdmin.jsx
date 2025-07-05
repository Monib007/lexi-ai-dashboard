import React from "react";
import { Form, Button, Alert } from "react-bootstrap";

function ContactAdmin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent to the admin.");
  };

  return (
    <div className="contact-admin-page">
      <h4 className="fw-semibold mb-4">Contact Platform Administrator</h4>

      <div className="card shadow-sm p-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="contactName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Issue or Request Topic" required />
          </Form.Group>

          <Form.Group className="mb-4" controlId="contactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Describe your issue or request..." required />
          </Form.Group>

          <div className="text-end">
            <Button type="submit" variant="dark">
              <i className="bi bi-send me-2"></i> Send Message
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ContactAdmin;
