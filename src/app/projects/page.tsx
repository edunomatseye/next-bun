"use client";

import { useEffect, useState } from "react";

interface Project {
  id: number;
  name: string;
  // Add other fields as needed
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        if (res.ok) {
          setProjects(data.projects);
        } else {
          setError(data.error || "Failed to fetch projects");
        }
      } catch (err) {
        setError("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="w-full max-w-2xl">
        {projects.map((project) => (
          <li key={project.id} className="border-b py-4">
            <span className="font-semibold">{project.name}</span>
          </li>
        ))}
      </ul>
      {!loading && projects.length === 0 && !error && <p>No projects found.</p>}
    </main>
  );
}
