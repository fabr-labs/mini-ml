import { microScope } from '../src/micro-scope.js';

import { data } from './data/data.js';
import { todoList as todoListComponent } from './components/list.component.js';
import { addTodo as addTodoComponent } from './components/addTodo.component.js';

import {
  event,
  text,
  list as li,
} from '../src/handlers/index.js';

export const html = microScope({ state: data });

const todoListName = text(state => state.name);
const pageButtonAction = event('click', (event, state) => { state.list = state.list === 'active' ? 'done' : 'active' });
const pageButtonText = text(state => state.list === 'active' ? 'DONE TODOS' : 'ACTIVE TODOS');

const demo = html`
  <div id="container">
    <h1>TODO</h1>
    <h2>${ todoListName }</h2>
    ${ addTodoComponent }
    <div id="todos">
      ${ todoListComponent }
    </div>
    <button ${ pageButtonAction }>${ pageButtonText }</button>
  </div>
`;

document.body.appendChild(demo);
