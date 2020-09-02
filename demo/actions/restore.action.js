import { event } from '../../src/handlers/index.js';

export const restoreAction = event('click', (event, state) => {
  const itemId    = event.target.dataset['id'];
  const itemIndex = state.doneItems.findIndex(item => item.id == itemId);
  const item      = state.doneItems[itemIndex];
  
  state.doneItems   = [...state.doneItems.slice(0, itemIndex), ...state.doneItems.slice(itemIndex + 1)];
  state.activeItems = [...state.activeItems, item]; 
});