import { createTemplate } from './functions/createTemplate.js';

export function microScope({ state: init }) {
  const funcs = [];

  const proxyHandler = {
    set(target, property, value) {
      target[property] = value;
      funcs.forEach(func => func(target));
      return true;
    }
  };

  const proxy = new Proxy(init, proxyHandler);

  return (strings, ...directives) => {
    const template = createTemplate(strings.reduce((acc, val, i) => `${acc}${val}${directives[i]?.placeholder({ id: i, acc, val })}`, ''));
    
    directives.forEach((directive, id) => {
      const elem = template.querySelector(`[data-ms="${id}"]`);
      directive.handler({ id, funcs, elem, proxy });
    });

    proxy._ready = true;
    return template;
  }
}
