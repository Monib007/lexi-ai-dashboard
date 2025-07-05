import React from 'react';

function Billings() {
  return (
    <div className="billings-page">
      <h4 className="fw-semibold mb-4">Billings & Plans</h4>

      <div className="card p-4 shadow-sm bg-white">
        <h5 className="mb-3">Current Plan</h5>
        <p><strong>Plan:</strong> Pro</p>
        <p><strong>Billing Cycle:</strong> Monthly</p>
        <p><strong>Next Payment:</strong> August 5, 2025</p>

        <button className="btn btn-outline-primary mt-3">Change Plan</button>
      </div>
    </div>
  );
}

export default Billings;
