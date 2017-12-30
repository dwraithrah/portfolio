import * as React from 'react';
import * as styles from './Margins.css';

export interface BodyProps {
  children: React.ReactNode;
}

function body ({children}: BodyProps) {
    return (<div className={styles.margins}>{children}</div>); 
}

export default body;
