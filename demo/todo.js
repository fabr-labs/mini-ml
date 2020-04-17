import { microScope } from '../src/microscope.js';
import {
  event,
  // show,
  text,
  // classList,
  component,
} from '../src/handlers/index.js';

import { data } from './data/data.js';
import { List } from './components/list.js';

const doneAction = event('click', (event, state) => {
  console.log('CLEEK')
  const itemId = event.target.dataset['data-item'];
  const item = state.activeItems.splice(state.activeItems.find(item => item.id === itemId), 1)[0];
  state.doneItems.splice(state.doneItems.length, 0, item);
});

const restoreAction = event('click', (event, state) => {
  const itemId = event.target.dataset['data-item'];
  const item = state.doneItems.splice(state.doneItems.find(item => item.id === itemId), 1)[0];
  state.activeItems.splice(state.activeItems.length, 0, item);
});

const demo = microScope({ state: data })`
  <div id="container">
    <h1>TODO</h1>
    <h2>${ text((state) => state.name) }</h2>
    <div id="list-container">
      ${ component(state => {
        switch (state.list) {
          case 'active':
            return List({ state, list: state.activeItems, action: doneAction, buttonText: 'DONE' });

          case 'done':
            return List({ state, list: state.doneItems, action: restoreAction, buttonText: 'RESTORE' });
        }
      })}
    </div>
  </div>
`;

document.body.appendChild(demo);

// state.page === 'activeItems' ?
//       page({ list: state.activeItems ,button: doneButton }) :
//       page({ list: state.activeItems ,button: doneButton })


// <h2>${{ text: (state) =>  state.name }}</h2>
// <h4 ${{ if: (state) => !state.name }} class="warning-text">
//   Invalid name!
// </h4>
// <div class="box" ${{ class: (state) => ({ active: state.name, isMike: state.name === 'mike' }) }}>

// </div>
// <input ${{ input: (event, state) =>  state.name = event.target.value, value: (state) => state.name }}></input>
// <button ${{ click: (event, state) => state.name = 'mike' }}>RESET</button>

    // component: state => {
    //   switch (state.list) {
    //     case 'active':
    //       return list({ list: state.activeItems, action: doneAction, buttonText: 'DONE' });

    //     case 'done':
    //       return list({ list: state.doneItems, action: restoreAction, buttonText: 'RESTORE' });
    //   }
    // }}}