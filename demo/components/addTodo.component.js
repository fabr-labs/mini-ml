import { html } from '../todo.js';
import { component } from '../../src/handlers/index.js';

import { addTodoAction } from '../actions/add-todo.action.js';

export const addTodo = component(
  (state) => html`
    <form id="addTodo" ${addTodoAction}>
      <input type="text" name="newTodo" />
      <button type="submit">ADD</button>
    </form>
  `
);
