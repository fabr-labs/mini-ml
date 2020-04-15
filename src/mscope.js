// @ts-nocheck

function createElement(html) {
  const container = document.createElement('div');
  container.innerHTML = html; 
  return container.firstElementChild;
}

function microScope() {
  const funcs = [];

  const handler = {
    set(target, property, value) {
      target[property] = value;
      funcs.forEach(func => func());
      return true;
    }
  };

  return function ms(strings, ...directives) {

    console.log({
      strings,
      directives,
    })

    const template = createElement(strings.reduce((acc, value, i) => {

      const directive = directives[i];

      console.log(directive)

      return i === strings.length - 1 ? `${acc}${value}` : directive.text ? `${acc}${value}<template data-ms-${i}></template>` : `${acc}${value} data-ms-${i}`;
    }, ``));

    // const partial = createElement(html)

    // if (innerText) {
    //   partial.innerText = innerText(proxy);
    //   funcs.push(() => partial.innerText = innerText(proxy));
    // };

    document.body.appendChild(template);
  }

}

const state = {
  name: 'mike'
}

microScope(state)`
  <div id="container">
    <h2>${{ text: (state) =>  state.name }}</h2>
    <h4 ${{ if: (state) => !state.name }} class="warning-text">
      Invalid name!
    </h4>
    <div ${{ class: (state) => !state.name ? 'box' : 'box active' }}>
    
    </div>
    <input ${{ onChange: (event, state) =>  state.name = event.target.value, value: (state) => state.name }}></input>
    <button ${{ click: (event, state) =>  state.name = 'mike' }}>RESET</button>
  </div>
`;
