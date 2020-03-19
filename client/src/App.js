import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import './styles/App.scss';
import logo from './imgs/logo.svg';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Link to="/">
            <img src={logo} alt="SpaceX" id="mastlogo" />
          </Link>
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
