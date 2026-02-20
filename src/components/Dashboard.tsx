import { Link, Outlet } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <section>
      <h2>Dashboard</h2>
      <p> Welcome to the Dashboard</p>
      <ul>
        <li>
          <Link to='overview'>Overview</Link>
        </li>
        <li>
          <Link to='settings'>Settings</Link>
        </li>
      </ul>
      <Outlet />
    </section>
  );
};
