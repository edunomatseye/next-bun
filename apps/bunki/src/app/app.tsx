import { RouterProvider, createRouter } from '@tanstack/react-router';
import { rootRoute } from './routes/root.route';
import { homeRoute } from './routes/home.route';
import { page2Route } from './routes/page2.route';

const routeTree = rootRoute.addChildren([homeRoute, page2Route]);
const router = createRouter({ routeTree });

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
