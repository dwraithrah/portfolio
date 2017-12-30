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

// This is the entry point for your web-app, this is as boiler platey as it gets, 
// the only thing you really have to mess with here if you so desire is the theme variable.

declare global {
  // tslint:disable-next-line:no-any
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; } 
}

// this allows you to use the Redux browser plugin to view any state changes being made in real time
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en 
const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;

const enhancer = composeEnhancers(
applyMiddleware(),
);

// so if you want to change the primary color or add  another object here to edit the typography,
// this is where its done, you can read the documentation for themes at 
// https://material-ui-next.com/customization/themes/#themes and colors @
// https://material-ui-next.com/style/color/#color
// and because this is typescript theres a little extra stuff you need to do 
// for further customization for themes/colors 
// https://material-ui-next.com/guides/typescript/
const theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: grey,
      error: red,
      type: 'light',
    },
});

// this is the store State from redux... really highly suggest doing some serious research
// on redux and how it works, state management is pretty big for front end development
// and for game development for that matter
const store = createStore(rootReducer, enhancer);

// as you may have guessed, this is where the entire program enters the single page for this
// single page application, as you can see its wrapped with some other components,
// the <Provider /> is Redux, <MuiThemeProvider /> sets the global colors for your app,
// and <Router /> allows for the routing of the pages, now React-Router is a bit tricky
// to get used to working with but its pretty powerful and dynamic. 
const entry = (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>
);

// the method used to doing the entering of the html
ReactDOM.render(entry, document.getElementById('root') as HTMLElement);
registerServiceWorker();
