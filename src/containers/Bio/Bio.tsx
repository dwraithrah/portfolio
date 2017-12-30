import * as React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography/Typography';
import purple from 'material-ui/colors/purple';

import * as styles from './Bio.css';
const avatar = require('./avatar.png');
import Margins from '../../components/UI/Margins/Margins';

export interface BioProps {
}

export interface BioState {
}

export class Bio extends React.Component<BioProps, BioState> {

  render() {
    return (
      <Margins>
        <Paper className={styles.bioPaper}>
          <Grid container={true} spacing={16} alignItems="flex-start">
            <Grid item={true} xs={12} sm={4}>
              <img className={styles.bioImg} style={{boxShadow: `2px 3px ${purple[100]}`}} src={avatar} />
            </Grid>
            <Grid item={true} xs={12} sm={5}>
              <Typography align="center" type="headline">
                Hey its me Robert
              </Typography>
            </Grid>
            <Grid item={true} sm={3} />
            <Grid item={true} xs={12}>
              <Typography align="center" type="body2">
                Hey its me Robert Jackson, thanks for checking out my portfolio, 
                I hope you find that im a silly little baby boy.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Margins>
    );
  }
}

export default Bio;
