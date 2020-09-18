import { miniMl } from '../src/mini-ml.js';
import { event, text } from '../src/handlers/index.js';

import { todoList as todoListComponent } from './components/list.component.js';
import { addTodo as addTodoComponent } from './components/add-todo.component.js';

import { changePageAction } from './actions/change-page.action.js';

import { data } from './data/data.js';

// Export the html template function 
// for child components to share state.
export const html = miniMl({ state: data });


// Define dynamic text.
const todoListName = text((state) => state.name);
const changePageButtonText = text((state) => (state.list === 'active' ? 'DONE TODOS' : 'ACTIVE TODOS'));

const demo = html`
  <div id="container">
    <h1>TODO</h1>
    <h2>${todoListName}</h2>
    ${addTodoComponent}
    <div id="todos">${todoListComponent}</div>
    <button ${changePageAction}>${changePageButtonText}</button>
  </div>
`;

document.body.appendChild(demo);
