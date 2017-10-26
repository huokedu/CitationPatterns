import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { configure, history } from './config/configure-store';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const store = configure();
const theme = createMuiTheme();


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={theme}>
            <App />
          </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/App/App', () => {
        const NextApp = require('./containers/App/App').default;
        ReactDOM.render(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <NextApp />
                </ConnectedRouter>
            </Provider>,
            document.getElementById('root')
        );
    });
    window.store = store;
}

registerServiceWorker();
