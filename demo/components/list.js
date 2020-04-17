import { microScope } from '../../src/microscope.js';

import {
  event,
  // show,
  text,
  // classList,
  component,
} from '../../src/handlers/index.js';

export const List = ({ state, list, action, buttonText }) => {

  console.log(action)

  return microScope({ state: {} })`
    <div id="list">
      ${list.map(({ id, title }) => `
        <div class="item">
          <span>${title}</span>
          <button data-item="${id}" ${ event('click', state => { console.log('HO') }) }>${ buttonText }</button>
        </div>
      `)}
    </div>
`
}