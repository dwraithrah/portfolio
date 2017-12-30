import * as React from 'react';
import Hello from './Hello';
import { shallow } from 'enzyme';

describe('<Hello />', () => {

  let incHand = jest.fn();
  let decHand = jest.fn();
  let hello = shallow(
    <Hello name="Jimmy" enthusiasmLevel={1} increment={incHand} decrement={decHand} />
  );
  it('renders without crashing', () => {
    expect(hello).toMatchSnapshot();
  });

  it('renders the correct text when no enthusiasm level `1` is given', () => {
    hello = shallow(
    <Hello name="Jimmy" enthusiasmLevel={1} increment={incHand} decrement={decHand}/>
  );
    expect(hello.find('.greeting').text()).toEqual('Hello Jimmy!');
  });

  it('throws when the enthusiasm level is 0', () => {
    expect(() => shallow(
    <Hello name="Jimmy" enthusiasmLevel={0} increment={incHand} decrement={decHand}/>
  )).toThrow();
  });

  it('throws when the enthusiasm level is negatiove', () => {
    expect (() => shallow(
    <Hello name="Jimmy" enthusiasmLevel={-1} increment={incHand} decrement={decHand}/>
  )).toThrow();
  });

});
