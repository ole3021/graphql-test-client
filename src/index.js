import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const graphClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

const ApolloApp = AppComponent => (
  <ApolloProvider client={graphClient}>
    <AppComponent />
  </ApolloProvider>
);

ReactDOM.render(ApolloApp(App), document.getElementById('root'));
