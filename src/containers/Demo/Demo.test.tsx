/* // tslint:disable:no-any

import { 
  Home, 
  OwnProps, 
  ConnectedProps, 
  ConnectedState 
} from './Home';
import * as React from 'react';
import { shallow } from 'enzyme';

describe('<Home />', () => {
  let props: OwnProps & ConnectedProps & ConnectedState;
  let mountedHome: any;
  const home = () => {
    if (!mountedHome) {
      mountedHome = shallow(<Home {...props} />);
      
    }
  };
  beforeEach(() => {
    props = undefined;
  })
});
 */
