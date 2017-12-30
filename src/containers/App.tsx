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

// so the app page is also typically boilerplater, this is like the master container for your app
// as you can see I am setting the routes that will be displayed on the page.
// I also set the Toolbar here since it covers the entire app page. 

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
