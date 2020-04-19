import { microScope as ms } from '../../src/microscope.js';

import {
  event,
  text,
  component,
  list as l,
} from '../../src/handlers/index.js';

export const List = ({ list, action, buttonText }) => {
  return ({ state, funcs }) => ms({ state, funcs })`
    <div id="list">
      ${ l(list, ({ title }) => ms({ state, funcs })`
        <div class="item">
          <span>${title}</span>
        </div>
      `)}
    </div>
  `
}

// export const List = ({ list, action, buttonText }) => {
//   return ({ state, funcs }) => ms({ state, funcs })`
//     <div id="list">
//       ${list.map(({ id, title }) => ms({ state, funcs })`
//         <div class="item">
//           <span>${title}</span>
//           <button>${ text(state => state.name) }</button>
//         </div>
//       `).join('')}
//     </div>
//   `
// }

// ${ component(microScope({ state })`<button data-item="${id}"  >${ buttonText }</button>` )}

// ${ event('click', () => console.log('HEY HEY HEY!')) }


// ${ component(microScope({ state: {} })`<button data-item="${id}" ${ event('click', () => console.log('HEY HEY HEY!')) } >${ buttonText }</button>` }