import * as React from 'react';
import { Redirect, Switch, Route } from 'react-router';

import Toolbar from './Layout/Toolbar/Toolbar';
import Demo from './Demo/Demo';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Bio from './Bio/Bio';
import Project from '../components/Project/Project';

interface OwnProps { }
interface OwnState { }
export class App extends React.Component<OwnProps, OwnState> {

  render() {
    return (
      <Toolbar>
        <Switch>
          <Route exact={true} path="/" component={Bio}/>
          <Route exact={true} path="/projects" component={Projects}/>
          <Route path="/projects/:title" component={Project}/>
          <Route path="/contact" component={Contact}/>        
          <Route path="/demo" component={Demo}/>
          <Redirect to="/" />
        </Switch>
      </Toolbar>
    );
  }
}

export default App;
