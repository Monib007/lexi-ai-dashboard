// src/components/CaseDetailsModal.jsx
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function CaseDetailsModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Case Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Upload area */}
        <div className="border rounded p-4 text-center mb-3" style={{ borderStyle: 'dashed' }}>
          <i className="bi bi-upload display-6 text-secondary"></i>
          <p className="mb-1 fw-semibold">Drag and drop your document</p>
          <p className="text-muted">or click to browse files</p>
          <Form.Control type="file" accept=".pdf" />
          <small className="text-muted">PDF (max. 20 MB)</small>
        </div>

        <div className="text-center my-2">— or —</div>

        {/* Manual description */}
        <Form.Group className="mb-3">
          <Form.Label>Add case facts manually</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Enter case description" />
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="dark" onClick={() => alert("Mock AI Summarization running...")}>
          Run AI Summariser
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CaseDetailsModal;
