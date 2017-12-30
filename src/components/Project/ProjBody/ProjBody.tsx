// tslint:disable:jsx-wrap-multiline
import * as React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

export interface ProjBodyProps {
  header: string;
  body: string;
}

function projBody ({body, header}: ProjBodyProps) {
  return (
    <>
      <Grid item={true} xs={12}>
        <Typography align="center" type="headline">
          {header}
        </Typography>
      </Grid>
      <Grid item={true} xs={12}>
        <Typography align="left" type="body2">
          {body}
        </Typography>
      </Grid>
    </>
  );
}

export default projBody;
