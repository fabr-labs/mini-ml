import {
  event,
  list as li,
} from '../../src/handlers/index.js';

import { html } from '../todo.js';

const doneAction = event('click', (event, state) => {
  const itemId    = event.target.dataset['id'];
  const itemIndex = state.activeItems.findIndex(item => item.id == itemId);
  const item      = state.activeItems[itemIndex]; 

  state.activeItems = [...state.activeItems.slice(0, itemIndex), ...state.activeItems.slice(itemIndex + 1)];
  state.doneItems   = [...state.doneItems, item];
});

const restoreAction = event('click', (event, state) => {
  const itemId    = event.target.dataset['id'];
  const itemIndex = state.doneItems.findIndex(item => item.id == itemId);
  const item      = state.doneItems[itemIndex];
  
  state.doneItems   = [...state.doneItems.slice(0, itemIndex), ...state.doneItems.slice(itemIndex + 1)];
  state.activeItems = [...state.activeItems, item]; 
});

const buttonAction = state => state.list === 'active' ? doneAction : restoreAction;
const buttonText   = state => state.list === 'active' ? 'DONE' : 'RESTORE';

function activeList(state) {
  return state.list === 'active' ? state.activeItems : state.doneItems;
}

export const todoList = li(state => activeList(state).map(({ title, id }) => html`
  <div class="item">
    <span>${title}</span>
    <button data-id="${id}" ${ buttonAction(state) }>${ buttonText(state) }</button>
  </div>
`));
