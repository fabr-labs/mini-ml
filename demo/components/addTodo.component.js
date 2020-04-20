import {
  event,
  component,
} from '../../src/handlers/index.js';

import { html } from '../todo.js';

const addAction = event('click', (event, state) => {

  event.preventDefault();

  console.log(event)

  // const itemId    = event.target.dataset['item'];
  // const itemIndex = state.activeItems.findIndex(item => item.id == itemId);
  // const item      = state.activeItems[itemIndex]; 

  // state.activeItems = [...state.activeItems.slice(0, itemIndex), ...state.activeItems.slice(itemIndex + 1)];
  // state.doneItems   = [...state.doneItems, item];
});

export const addTodo = component(state => html`
  <form id="addTodo" ${ true }>
    <input></input><button type="submit">ADD</button>
  </form>
`);
