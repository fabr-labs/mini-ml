import { createTemplate } from './functions/createTemplate.js';

export function microScope({ state = {}, funcs = [] }) {
  const proxyHandler = {
    set(target, property, value) {
      console.log('DATA CHANGED!!!')
      target[property] = value;
      funcs.forEach(func => func(target));
      return true;
    }
  };

  const proxy = new Proxy(state, proxyHandler);

  setTimeout(() => {
    proxy._ready = true;
  }, 1000);

  return (strings, ...directives) => {
    const template = createTemplate(strings.reduce((acc, val, i) => {
      return `${acc}${val}${directives[i] && directives[i].placeholder ? directives[i].placeholder({ id: `${i}` }) : directives[i] }`
    }, ''));

    directives.forEach((directive, id) => {
      return directive.handler && directive.handler({ id, funcs, elem: template.querySelector(`[data-ms="${id}"]`), proxy });
    });

    return template;
  }
}
