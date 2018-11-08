import { DECREMENT, INCREMENT } from './definitions';

export const incrementCounter = () => ({ type: INCREMENT });
export const decrementCounter = () => ({ type: DECREMENT });
