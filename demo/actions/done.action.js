import { event } from '../../src/handlers/index.js';

export const doneAction = event('click', (event, state) => {
  const itemId    = event.target.dataset['id'];
  const itemIndex = state.activeItems.findIndex(item => item.id == itemId);
  const item      = state.activeItems[itemIndex]; 

  state.activeItems = [...state.activeItems.slice(0, itemIndex), ...state.activeItems.slice(itemIndex + 1)];
  state.doneItems   = [...state.doneItems, item];
});