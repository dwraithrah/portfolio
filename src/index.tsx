import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rootReducer } from './Store/Reducers/';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { purple, red, grey } from 'material-ui/colors';

import './index.css';

declare global {
  // tslint:disable-next-line:no-any
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; } 
}

const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;

const enhancer = composeEnhancers(
applyMiddleware(),
);

const theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: grey,
      error: red,
      type: 'light',
    },
});

const store = createStore(rootReducer, enhancer);

const entry = (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(entry, document.getElementById('root') as HTMLElement);
registerServiceWorker();
