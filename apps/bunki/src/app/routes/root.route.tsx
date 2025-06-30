import { createRootRoute } from '@tanstack/react-router';
import NxWelcome from '../nx-welcome';
import { Outlet, Link } from '@tanstack/react-router';

export const rootRoute = createRootRoute({
  component: () => (
    <div>
      <NxWelcome title="bunki" />
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  ),
});
