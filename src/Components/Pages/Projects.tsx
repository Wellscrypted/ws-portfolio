import React from 'react';

interface ProjectsProps {
  bodyHeight: number;
}

const Projects = (props: ProjectsProps) => {
  const { bodyHeight } = props;
  console.log('Projects bodyHeight: ', bodyHeight);

  return (
    <div className="container-fluid-0 border">
      <div style={{ height: `${bodyHeight}px`, border: 'solid red 1px' }}></div>
    </div>
  );
};

export default Projects;
