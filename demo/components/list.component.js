import { html } from '../todo.js';
import { list as li } from '../../src/handlers/index.js';

import { doneAction } from '../actions/done.action.js';
import { restoreAction } from '../actions/restore.action.js';

// Change the button action based on state.
const buttonAction = (state) => (state.list === 'active' ? doneAction : restoreAction);
// Define dynamic text.
const buttonText = (state) => (state.list === 'active' ? 'DONE' : 'RESTORE');

// Return the correct list [active|done].
function activeList(state) {
  return state.list === 'active' ? state.activeItems : state.doneItems;
}

// Map a div for each list item. 
// Each row is a new template, created using the html method.
export const todoList = li((state) =>
  activeList(state).map(
    ({ title, id }) => html`
      <div class="item">
        <span>${title}</span>
        <button data-id="${id}" ${buttonAction(state)}>${buttonText(state)}</button>
      </div>
    `
  )
);
