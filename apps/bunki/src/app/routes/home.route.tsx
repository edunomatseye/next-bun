import { createFileRoute } from '@tanstack/react-router';
import Home from '../components/Home';

export const homeRoute = createFileRoute({
  path: '/',
  component: Home,
});
