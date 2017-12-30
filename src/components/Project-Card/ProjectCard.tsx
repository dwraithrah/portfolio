import * as React from 'react';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom/';

import * as styles from './ProjectCard.css';
import { Details } from '../../assets/Projects/test/Projects';

export interface ProjectCardProps {
  title: string;
  avatar?: string;
  description?: string;
  details: Details;
}

export function projectCard ({title, avatar, description, details}: ProjectCardProps) {
    return (
      <Card className={styles.card}>
        <CardMedia
          className={styles.cardImage}
          image={avatar}
          title="baby boy"
        />
        <CardContent>
          <Typography type="headline" align="center">
            {title}
          </Typography>
          <Typography className={styles.cardDescription}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link 
            to={{
              pathname: '/projects/' + title,
              state: {
                title,
                body: details.body,
                pictures: details.pictures,
                header: details.header,
            }}}
          >
          <Button dense={true} color="primary">
            Learn More
          </Button>
          </Link>
        </CardActions>
      </Card>
    );
}

export default projectCard;
