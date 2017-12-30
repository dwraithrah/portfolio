import * as React from 'react';
import * as styles from './ReactBanner.css';
// import Grid from 'material-ui/Grid';
const logo = require('./logo.svg');

interface ReactBannerProps {
}

const ReactBanner: React.SFC<ReactBannerProps> = (props) => {
  return(
    <div className={styles.reactBanner}>
      <div className={styles.reactBannerHeader}>
        <img src={logo} className={styles.reactBannerLogo} alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className={styles.reactBannerIntro}>
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
    </div>
  );
};

export default ReactBanner;
