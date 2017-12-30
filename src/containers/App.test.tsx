import * as React from 'react';
import App from './App';
import { shallow } from 'enzyme';

// the most basic test you can write for a react component/container
// this is testing if the page renders and matches the snapshot,
// I recommend reading the documentation at 
// https://facebook.github.io/jest/docs/en/api.html

describe('<App />', () => {
  const app = shallow(<App />);
  it('renders without crashing', () => {
    expect(app).toMatchSnapshot();
  });
});
