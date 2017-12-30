// tslint:disable:jsx-wrap-multiline
import * as React from 'react';
import  AppBar  from 'material-ui/AppBar';
import Links from '../../../components/UI/Links/Links';
import * as styles from './Toolbar.css';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';

interface OwnProps { }

interface OwnState { 
  isOpen: boolean;
}

export class Toolbar extends React.Component<OwnProps, OwnState> {
  state = {
    isOpen: false,
  };

  toggleDrawer = (open: boolean) => () => { this.setState({isOpen: open}); };

  render() {
    return (
      <>
        <AppBar position="static" color="default">
          <div className={styles.highRes}>
            <Links />
          </div>
          <div className={styles.lowRes}>
            <Button onClick={this.toggleDrawer(true)}>Open Left</Button>
          </div>
        </AppBar>
        {this.props.children}
        <Drawer 
          anchor="left" 
          open={this.state.isOpen} 
          onClose={this.toggleDrawer(false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
            className={styles.lowRes}
          >
          <Links />
          </div>
        </Drawer> 
      </>
    );
  }
}

export default Toolbar;
