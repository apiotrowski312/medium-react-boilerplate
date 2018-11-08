import './App.css';
import React from 'react';
import { decrementCounter, incrementCounter } from './store/numeric/actions'
import { connect } from 'react-redux'
import { withNamespaces } from 'react-i18next';

const App = (props) => (
  <div className="App">
    <div>
      <button onClick={props.inc}>
        UP
      </button>
      <button onClick={props.dec}>
        DOWN
      </button>
    </div>
    <div>
      <button onClick={() => props.i18n.changeLanguage('pl')}>PL</button>
      <button onClick={() => props.i18n.changeLanguage('en')}>EN</button>
    </div>
    {props.t('Counter')}: {props.num}
  </div>
)
const mapStateToProps = (state) => {
  return {
    num: state.numeric.counter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(incrementCounter()),
    dec: () => dispatch(decrementCounter()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNamespaces()(App));