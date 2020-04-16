const state = {
  name: 'michael'
}

import { microScope } from '../src/microscope.js';

microScope(state)`
  <div id="container">
    <h2>${{ text: (state) =>  state.name }}</h2>
    <h4 ${{ if: (state) => !state.name }} class="warning-text">
      Invalid name!
    </h4>
    <div class="box" ${{ class: (state) => ({ active: state.name, isMike: state.name === 'mike' }) }}>
    
    </div>
    <input ${{ input: (event, state) =>  state.name = event.target.value, value: (state) => state.name }}></input>
    <button ${{ click: (event, state) => {
      console.log('CALLING');
      state.name = 'mike'
    } }}>RESET</button>
  </div>
`;