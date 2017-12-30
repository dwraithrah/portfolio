// tslint:disable:jsx-wrap-multiline
import * as React from 'react';
import { rootState } from '../../Store/Reducers/';
import { connect, Dispatch } from 'react-redux';

import * as actions from '../../Store/Actions/';

// import * as styles from './Demo.css';

import Hello from '../../components/Hello/Hello';
import ReactBanner from '../../components/ReactBanner/ReactBanner';
import Margins from '../../components/UI/Margins/Margins';

export interface OwnProps { }
export interface OwnState { }
export interface ConnectedProps {
  enthusiasm: number;
  name: string;
}
export interface ConnectedState {
  onIncrement: () => void;
  onDecrement: () => void;
}

export class Demo extends React.PureComponent<OwnProps & ConnectedProps & ConnectedState, OwnState> {

  incrementHandler = () => {
    this.props.onIncrement();
  }

  decrementHandler = () => {
    this.props.onDecrement();
  }
  
  render() {
    const { name, enthusiasm } = this.props;

    return (
      <>
        <ReactBanner />
        <Margins>
          <Hello 
            name={name}
            enthusiasmLevel={enthusiasm} 
            increment={this.incrementHandler}
            decrement={this.decrementHandler}
          />
        </Margins>
      </>          
    );
  }
}

const mapStateToProps = (state: rootState): ConnectedProps => {
  return {
    enthusiasm: state.enthusiasm.enthusiasmLevel,
    name: state.enthusiasm.languageName,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.all>): ConnectedState => {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
};

const connectedDemo: React.ComponentClass<OwnProps> = 
  connect(mapStateToProps, mapDispatchToProps)(Demo);

export default connectedDemo;
