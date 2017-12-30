import * as React from 'react';
import Margins from '../../components/UI/Margins/Margins';
// import * as styles from './Project.css';

import ProjectCard from '../../components/Project-Card/ProjectCard';

import { projects, Project } from '../../assets/Projects/test/Projects';

interface OwnProps { }

interface OwnState { 
  projects: Project[];
}

export class Projects extends React.Component<OwnProps, OwnState> {
  state = {
    projects: projects,
  };

  render() {
    return (
      <Margins>
        {projects.length >= 0 
        ? this.state.projects.map(card => (
          <ProjectCard 
            key={card.id}
            title={card.title}
            description={card.description}
            avatar={card.image}
            details={card.details}
          />))
        : <p>No projects to display</p>}
      </Margins>
    );
  }
}

export default Projects;
