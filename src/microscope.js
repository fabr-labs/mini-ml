// @ts-nocheck
// export function microScope(reducers) {
//   return 
// }

// function mutate(state, target, newValue) {

// }

// const state = {
//   optionsPage: {
//     options: [1, 2, 3, 4],
//   },
//   infoPages: {
//     showPage: 0,
//   }
// }

function createElement(html) {
  const container = document.createElement('div');
  container.innerHTML = html; 
  return container.firstElementChild;
}

// microScope([optionsPage, infoPages]);
let i = 0;
function inc() {
  return i++;
}

function microScope(templateFn, init) {
  const funcs = [];

  const handler = {
    set: function(target, property, value) {
      target[property] = value;
      funcs.forEach(func => func());
      // console.log(target, property, value);
      return true;
    }
  };

  const proxy = new Proxy(init, handler);
  const template = createElement(templateFn(ms, proxy));

  function ms(html, { classList, innerText, ...events } = {}) {
    const id      = `ms-template-z${inc()}`;
    const partial = createElement(html)

    // if (classList) { funcs.push(() => (classList())) }
    if (innerText) {
      partial.innerText = innerText(proxy);
      funcs.push(() => partial.innerText = innerText(proxy));
    };

    for (let [key, value] of Object.entries(events)) {
      // console.log('Set', key, value)
      partial.addEventListener(key, (event) => value(event, proxy));
      // console.log(`${key}: ${value}`);
    }

    setTimeout(() => {
      const ele = template.querySelector(`#${id}`);
      ele.parentNode.replaceChild(partial, ele);
    }, 0);

    return `<template id="${id}"></template>`
  }

  // console.log('Attach template')
  // template.innerHTML = templateFn(ms, proxy);

  // console.log('Attach template')
  // template.innerHTML = templateFn(ms);
  // console.log(template)
  document.body.appendChild(template);
  // console.log(template)

  // setTimeout(() => {
  //   console.log(template)
  // }, 1000);
}

const userName = {
  innerText: (state) => {
    console.log(state);
    return state.name;
  }
}

const init = {
  name: 'mike',
  showAvatar: true,
}

let nom = 1;

const mainButton = {
  click(state) {
    console.log('CLEEEK!')
    state.name = `Mike${ nom++ }`;
  }
}

microScope((ms, state) => `
<div id="container">
  ${ms('<h2></h2>', userName)}
  <div>
    ${ms(`<h4>THIS IS A BIT!</h4>`, mainButton)}
  </div>
</div>
`, init);


// `<div id="dom">${ user.name }</div>`, {
//   click: () => console.log('CLEEEEK!'),
//   classList: (classList, state) => { classList[state.showItem ? 'add' : 'remove']('active'); }
// }

// function getTemplate(showClass) {
//   return `
// <div id="container">
//   ${ micro(`<div data-click="" data-css=""></div>`) }
// </div>
// `
// }

// let show = false;

// const elem = document.createElement('div');

// elem.innerHTML = getTemplate(show);

// setInterval(() => {
//   show = !show;
//   console.log('SHOW', show);
//   elem.innerHTML = getTemplate(show);
// }, 3000);

// document.body.appendChild(elem);