import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <React.Fragment>
      <div id="sidebar">
        <h1>Burning Airlines🔥</h1>
        <nav>
          <ul>
            <li>
              <Link to={'/home'}>Home</Link>
            </li>
            <li>
              <Link to={'/planes'}>Planes</Link>
            </li>
            <li>
              <Link to={`/users`}>Users</Link>
            </li>
            <li>
              <Link to={`/flights`}>Flights</Link>
            </li>
            <li>
              <Link to={`/Reservations`}>Reservations</Link>
            </li>
          </ul>
        </nav>
      </div>
    <div id="detail">
      <Outlet />
    </div>
    </React.Fragment>
  );
};