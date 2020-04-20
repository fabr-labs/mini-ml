import {
  event,
  component,
} from '../../src/handlers/index.js';

import { html } from '../todo.js';

let newId = 2000;

const addAction = event('submit', (event, state) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const newTodo = formData.get('newTodo');

  state.activeItems = [...state.activeItems, { id: newId++, title: newTodo }];
});

export const addTodo = component(state => html`
  <form id="addTodo" ${ addAction }>
    <input type="text" name="newTodo">
    <button type="submit">ADD</button>
  </form>
`);
