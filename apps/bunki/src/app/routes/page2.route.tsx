import { createFileRoute } from '@tanstack/react-router';
import Page2 from '../components/Page2';

export const page2Route = createFileRoute({
  path: '/page-2',
  component: Page2,
});
