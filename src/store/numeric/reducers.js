import { DECREMENT, INCREMENT } from './definitions';

const defaultState = { counter: 0 };

const counter = (state = defaultState, action) => {
switch (action.type) {
  case INCREMENT:
    return { ...state, counter: state.counter + 1};
  case DECREMENT:
    return { ...state, counter: state.counter - 1 };
  default:
    return state;
  }
};
export default counter;