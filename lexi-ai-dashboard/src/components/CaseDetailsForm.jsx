// src/components/CaseDetailsForm.jsx
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const initialForm = {
  caseType: 'Criminal',
  complainant: '',
  accused: '',
  victim: '',
  allegations: '',
  facts: '',
  dateOfIncident: '',
  representing: [],
};

function CaseDetailsForm({ onBack, onSave }) {
  const [form, setForm] = useState(initialForm);
  const [inputTag, setInputTag] = useState('');

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleTagAdd = (e) => {
    e.preventDefault();
    if (inputTag && !form.representing.includes(inputTag)) {
      handleChange('representing', [...form.representing, inputTag]);
      setInputTag('');
    }
  };

  const handleTagRemove = (tag) => {
    handleChange('representing', form.representing.filter((t) => t !== tag));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3">
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Case Type</Form.Label>
          <Form.Select
            value={form.caseType}
            onChange={(e) => handleChange('caseType', e.target.value)}
          >
            <option>Criminal</option>
            <option>Civil</option>
            <option>Corporate</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Date of Incident</Form.Label>
          <Form.Control
            type="date"
            value={form.dateOfIncident}
            onChange={(e) => handleChange('dateOfIncident', e.target.value)}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Complainant</Form.Label>
        <Form.Control
          type="text"
          value={form.complainant}
          onChange={(e) => handleChange('complainant', e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Accused</Form.Label>
        <Form.Control
          type="text"
          value={form.accused}
          onChange={(e) => handleChange('accused', e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Victim</Form.Label>
        <Form.Control
          type="text"
          value={form.victim}
          onChange={(e) => handleChange('victim', e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Allegations</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          value={form.allegations}
          onChange={(e) => handleChange('allegations', e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Facts Summary</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          value={form.facts}
          onChange={(e) => handleChange('facts', e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Representing (please select):</Form.Label>
        <div className="d-flex gap-2 flex-wrap mb-2">
          {form.representing.map((tag, index) => (
            <span key={index} className="badge text-bg-dark rounded-pill px-3 py-2">
              {tag}{" "}
              <i
                className="bi bi-x ms-2 cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={() => handleTagRemove(tag)}
              />
            </span>
          ))}
        </div>
        <div className="d-flex gap-2">
          <Form.Control
            type="text"
            value={inputTag}
            onChange={(e) => setInputTag(e.target.value)}
          />
          <Button onClick={handleTagAdd}>Add</Button>
        </div>
      </Form.Group>

      <div className="d-flex justify-content-between">
        <Button variant="outline-secondary" onClick={onBack}>
          Go Back
        </Button>
        <Button variant="primary" type="submit">
          Save Details
        </Button>
      </div>
    </Form>
  );
}

export default CaseDetailsForm;
