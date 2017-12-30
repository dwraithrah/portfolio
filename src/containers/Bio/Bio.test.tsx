import * as React from 'react';
import Bio from './Bio';
import { shallow } from 'enzyme';

describe('<Bio />', () => {
  const bio = shallow(<Bio />);
  it('renders without crashing', () => {
    expect(bio).toMatchSnapshot();
  });
});
