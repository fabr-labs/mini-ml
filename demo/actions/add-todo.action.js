import { event } from '../../src/handlers/index.js';

import { generateId } from '../functions/generate-id.js';

export const addTodoAction = event('submit', (event, state) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const newTodo = formData.get('newTodo');

  state.activeItems = [...state.activeItems, { id: generateId(), title: newTodo }];
});