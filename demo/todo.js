import { microScope } from '../src/microscope.js';
import {
  event,
  text,
  list as li,
} from '../src/handlers/index.js';

import { data } from './data/data.js';
import { List } from './components/List.js';

const doneAction = event('click', (event, state) => {
  const itemId    = event.target.dataset['item'];
  const itemIndex = state.activeItems.findIndex(item => item.id == itemId);
  const item      = state.activeItems[itemIndex]; 

  state.activeItems = [...state.activeItems.slice(0, itemIndex), ...state.activeItems.slice(itemIndex + 1)];
  state.doneItems   = [...state.doneItems.slice(0, itemIndex), item, ...state.doneItems.slice(itemIndex + 1)];
});

const restoreAction = event('click', (event, state) => {
  const itemId    = event.target.dataset['item'];
  const itemIndex = state.doneItems.findIndex(item => item.id == itemId);
  const item      = state.doneItems[itemIndex];
  
  state.doneItems = [...state.doneItems.slice(0, itemIndex), ...state.doneItems.slice(itemIndex + 1)];
  state.activeItems   = [...state.activeItems.slice(0, itemIndex), item, ...state.activeItems.slice(itemIndex + 1)]; 
});

function activeList(state) {
  return state.list === 'active' ? state.activeItems : state.doneItems;
}

export const html = microScope({ state: data });

const demo = html`
  <div id="container">
    <h1>TODO</h1>
    <h2>${ text(state => state.name) }</h2>
    <div id="todos">
      ${ li(state => activeList(state).map(({ title, id }) => html`
        <div class="item">
          <span>${title}</span>
          <button data-item="${id}" ${doneAction}>${ state.list === 'active' ? 'DONE' : 'RESTORE' }</button>
        </div>
      `))}
    </div>
  </div>
`;

document.body.appendChild(demo);
