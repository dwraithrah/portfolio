import * as React from 'react';
import * as styles from './Hello.css';
import { getExclamationMarks } from '../../util/';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';

export interface HelloProps {
  name: String;
  enthusiasmLevel?: number;
  increment?: () => void;
  decrement?: () => void;
}

export function hello({name, enthusiasmLevel = 1, increment, decrement }: HelloProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  return (
    <div className={styles.hello}>
      <Grid alignItems="center" container={true}  wrap="wrap">
        <Grid item={true} xs={12} className="greeting">
          <Typography 
            className="greeting"
            type="display2"
            gutterBottom={true}
            align="center"
            style={{color: blue[100]}}
          >
            Hello {name + getExclamationMarks(enthusiasmLevel)}
          </Typography>
        </Grid>
      </Grid>
      <Grid alignItems="center" justify="center" spacing={40} container={true} >
        <Grid item={true} xs={12} sm={6}>
          <Button raised={true} color="primary"onClick={increment}>Increase Happiness</Button>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Button raised={true} color="primary"onClick={decrement}>Decrease Happiness</Button>
        </Grid>
      </Grid>   
    </div>
  );
}

export default hello;
