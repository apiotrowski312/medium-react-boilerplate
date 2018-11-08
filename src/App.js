import './App.css';
import React from 'react';
import { decrementCounter, incrementCounter } from './store/numeric/actions';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const App = props => (
  <div className="App">
    <div>
      <button onClick={props.inc}>UP</button>
      <button onClick={props.dec}>DOWN</button>
    </div>
    <div>
      <button onClick={() => props.i18n.changeLanguage('pl')}>PL</button>
      <button onClick={() => props.i18n.changeLanguage('en')}>EN</button>
    </div>
    {props.t('Counter')}: {props.num}
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  </div>
);
const mapStateToProps = state => {
  return {
    num: state.numeric.counter,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    inc: () => dispatch(incrementCounter()),
    dec: () => dispatch(decrementCounter()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNamespaces()(App));
