import React from 'react';
import WSCard from '../Custom/WSCard';
// import { useMediaQuery } from '@mui/material';
import x701header from '../../images//701x/header.png';

interface ProjectsProps {
  bodyHeight: number;
}

const Projects = (props: ProjectsProps) => {
  const { bodyHeight } = props;
  // const phoneView = useMediaQuery('(max-width: 500px)');
  // const tabletView = useMediaQuery('(max-width: 768px)');

  return (
    <div className="container-fluid-0" style={{ overflowY: 'auto', height: `${bodyHeight}px` }}>
      <div className="row mx-2 my-3 p-0">
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 m-0 p-0">
          <WSCard
            title="701x Autonomous Rancher"
            description="A Cattle Management System that allows ranchers to stay connected to their herd, autonomously."
            topImage={x701header}
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 m-0 p-0">
          <WSCard title="Card 1" description="Card 1"></WSCard>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 m-0 p-0">
          <WSCard title="Card 1" description="Card 1"></WSCard>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 m-0 p-0">
          <WSCard title="Card 1" description="Card 1"></WSCard>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 m-0 p-0">
          <WSCard title="Card 1" description="Card 1"></WSCard>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 m-0 p-0">
          <WSCard title="Card 1" description="Card 1"></WSCard>
        </div>
      </div>
    </div>
  );
};

export default Projects;
