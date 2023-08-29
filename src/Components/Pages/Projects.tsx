import React from 'react';

interface ProjectsProps {
  bodyHeight: number;
}

const Projects = (props: ProjectsProps) => {
  const { bodyHeight } = props;
  console.log('Projects bodyHeight: ', bodyHeight);

  return <div className="container-fluid-0 p-4" style={{ overflowY: 'auto', height: `${bodyHeight}px` }}></div>;
};

export default Projects;
