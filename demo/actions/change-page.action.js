import { event } from '../../src/handlers/index.js';

export const changePageAction = event('click', (event, state) => {
  state.list = state.list === 'active' ? 'done' : 'active';
});