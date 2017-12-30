import * as React from 'react';
import ReactBanner from './ReactBanner';
import { shallow } from 'enzyme';

describe('<ReactBanner />', () => {
  const reactBanner = shallow(<ReactBanner />);
  it('should render without crashing', () => {
    expect(reactBanner).toMatchSnapshot();
  });
});
