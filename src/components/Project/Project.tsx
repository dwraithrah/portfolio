import * as React from 'react';
import Margins from '../UI/Margins/Margins';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Pictures from './Pictures/Pictures';
import ProjBody from './ProjBody/ProjBody';
import Button from 'material-ui/Button';
import { withRouter } from 'react-router';

interface State {
  body: string;
  pictures: string[];
  title: string;
  header: string;
}

interface Location {
  pathname?: string;
  search?: string;
  hash?: string;
  state: State;
  key?: string;
}

export interface ProjectProps {
  location: Location;
  match?: object;
  history?: object;
}

function project (props: ProjectProps) {
  const state = props.location.state;
  const { body, pictures, title, header } = state;
  return (
    <Margins>
      <Typography type="display3">{title}</Typography>
      <Grid 
        style={{
          textAlign: 'center',
        }}
        container={true} 
        alignContent="center" 
        alignItems="center" 
        justify="space-around"
      >
        <Pictures pics={pictures}/>
      </Grid>
      <Grid container={true}>
        <ProjBody body={body} header={header}/>
      </Grid>
      <Grid 
        style={{
          textAlign: 'center',
          minHeight: '200px',
        }}
        container={true} 
        alignContent="center" 
        alignItems="center" 
        justify="space-around"
      >
        <Grid item={true} xs={6} >
          <Button color="primary">
            Download
          </Button>
        </Grid>
        <Grid item={true} xs={6} >
          <Button color="primary">
            Github
          </Button>
        </Grid>
      </Grid>
    </Margins>
  );
}

export default withRouter(project);
