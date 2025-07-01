import * as React from 'react';
import { useForm } from '@tanstack/react-form';

export default function Home() {
  const form = useForm({
    defaultValues: { username: '' },
    onSubmit: async ({ value }) => {
      // Simulate fetching user data
      alert(`Retrieving data for user: ${value.username}`);
      // Here you would fetch user data from an API
    },
  });

  return (
    <div>
      This is the generated root route.{' '}
      <a href="/page-2">Click here for page 2.</a>
      <hr />
      <form onSubmit={form.handleSubmit} style={{ marginTop: 24 }}>
        <label>
          Username:
          <input
            name="username"
            value={form.values.username}
            onChange={form.handleChange}
            required
          />
        </label>
        <button type="submit" style={{ marginLeft: 8 }}>Get User Data</button>
      </form>
    </div>
  );
}
