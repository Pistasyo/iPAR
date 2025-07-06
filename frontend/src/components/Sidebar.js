// src/components/Sidebar.js
import React from 'react';
import '../App.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">i-PAR</h2>
      <ul className="sidebar-links">
        <li><a href="/">Dashboard</a></li>
        <li><a href="/profile">Maintenance</a></li>
        <li><a href="/settings">Reports</a></li>
        {/* <li><a href="/logout">Logout</a></li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
