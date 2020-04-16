import { microScope } from '../../src/microscope.js';

export function list({ list, action, buttonText }) {
  return microScope({ state })`
    <div id="list">
      // ${list.map(({ id, title }) => `
      //   <div id="list">
      //     <span>${{ text: title }}</span>
      //     <button data-item="${id}" ${ action }>${ buttonText }</button>
      //   </div>
      // `)}
    </div>
  `
};
