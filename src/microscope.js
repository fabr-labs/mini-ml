import { createTemplate } from './functions/createTemplate.js';

let instance = -1;

export function microScope({ state: init }) {
  const funcs = [];
  const ins = instance += 1;

  const proxyHandler = {
    set(target, property, value) {
      // console.log(ins, funcs)
      target[property] = value;
      funcs.forEach(func => func(target));
      return true;
    }
  };

  const proxy = new Proxy(init, proxyHandler);

  return (strings, ...directives) => {
    const template = createTemplate(strings.reduce((acc, val, i) => {
      console.log(directives[i] && directives[i].placeholder)
      return `${acc}${val}${directives[i] && directives[i].placeholder ? directives[i].placeholder({ id: `${ins}-${i}` }) : directives[i] }`
    }, ''));

    directives.forEach((directive, id) => {
      return directive.handler && directive.handler({ id, funcs, elem: template.querySelector(`[data-ms="${ins}-${id}"]`), proxy });
    });

    // This initialises the proxyHandler by setting `_ready`. 
    proxy._ready = true;

    return template;
  }
}
