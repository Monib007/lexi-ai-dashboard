import React from 'react';
import DashboardCards from '../components/DashboardCards';
import UpcomingMeetings from '../components/UpcomingMeetings';
import TeamStatus from '../components/TeamStatus';

function Dashboard() {
  return (
    <div className="dashboard-page">
      <DashboardCards />
      <UpcomingMeetings />
      <TeamStatus />
    </div>
  );
}

export default Dashboard;
