import React, { useState } from "react";

function NewCaseForm({ onSave, onCancel }) {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCase = {
      id: Date.now(),
      title,
      tags: tags.split(",").map((t) => t.trim()),
      status,
    };
    onSave(newCase);
  };

  return (
    <div className="card shadow-sm p-4">
      <h5 className="mb-3">Create New Case</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Case Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tags (comma-separated)</label>
          <input
            type="text"
            className="form-control"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Pending</option>
            <option>Analyzed</option>
          </select>
        </div>

        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-secondary" type="button" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-primary" type="submit">
            Save Case
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewCaseForm;
