import { createServerRoute } from '@tanstack/start/server';
import { getSession } from 'better-auth';

export const serverRoute = createServerRoute({
  path: '/api/user',
  async loader({ req }) {
    // Use better-auth to get the user session
    const session = await getSession(req);
    if (!session?.user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }
    // Return user data
    return new Response(JSON.stringify({ user: session.user }), { status: 200 });
  },
});
