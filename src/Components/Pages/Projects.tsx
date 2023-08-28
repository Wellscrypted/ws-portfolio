import React, { useEffect, useState } from 'react';

interface ProjectsProps {
  topBars: number;
}

const Projects = (props: ProjectsProps) => {
  const { topBars } = props;
  console.log('Projects topBars: ', topBars);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="container-fluid-0 border">
      <div>Width: {windowWidth}</div>
      <div>Height: {windowHeight}</div>
    </div>
  );
};

export default Projects;
