import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

interface LinksProps {
}

const links: React.SFC<LinksProps> = (props) => {
  return(
    <ul>
      <li><Link to="/"><Button color="primary">Bio</Button></Link></li>
      <li><Link to="/projects"><Button color="primary" >Projects</Button></Link></li>
      <li><Link to="/contact"><Button color="primary" >Contact</Button></Link></li>
      <li><Link to="/demo"><Button color="primary" >Demo</Button></Link></li>
    </ul>
  ) ;
};

export default links;
