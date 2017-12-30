// tslint:disable:jsx-wrap-multiline
import * as React from 'react';
import Grid from 'material-ui/Grid';

export interface PicturesProps {
  pics: string[];
}

function pictures ({pics}: PicturesProps) {
  return (
    <>
      {pics.map((pic, id) => (
        <Grid key={id} item={true} xs={12} sm={6} md={4}>
          <img 
            style={{
              height: 400,
              width: 350,
            }}
            src={pic} 
          />
        </Grid> 
      ))}
    </>
  );
}

export default pictures;
