import { microScope } from '../src/micro-scope.js';

import { data } from './data/data.js';
import { todoList } from './components/list.component.js';

import {
  event,
  text,
  list as li,
} from '../src/handlers/index.js';

export const html = microScope({ state: data });

const demo = html`
  <div id="container">
    <h1>TODO</h1>
    <h2>${ text(state => state.name) }</h2>
    <button ${ event('click', (event, state) => { state.list = state.list === 'active' ? 'done' : 'active' }) } >${text(state => state.list === 'active' ? 'DONE TODOS' : 'ACTIVE TODOS')}</button>
    <div id="todos">
      ${ todoList }
    </div>
  </div>
`;

document.body.appendChild(demo);
