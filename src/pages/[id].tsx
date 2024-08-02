import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { projects } from '../../constants';

interface Project {
  title: string;
  category: string;
  date: string;
}

const ProjectPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; 
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id && typeof id === 'string') {
      const foundProject = projects.find((project) => project.slug === id);
      setProject(foundProject || null);
    }
  }, [id]);

  if (!project) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>Categoría: {project.category}</p>
      <p>Fecha: {project.date}</p>
    </div>
  );
};

export default ProjectPage;
