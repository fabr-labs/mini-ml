import { createTemplate } from './functions/createTemplate.js';

export function microScope({ state = {}, funcs = new Set() }) {
  const storeHandler = {
    set(target, property, value) {
      target[property] = value;
      funcs.forEach(func => func(target));
      return true;
    }
  };

  const store = new Proxy(state, storeHandler);

  setTimeout(() => {
    store._ready = true;
  }, 0);

  return (strings, ...directives) => {
    const template = createTemplate(strings.reduce((acc, val, i) => {
      return `${acc}${val}${directives[i] && directives[i].placeholder ? directives[i].placeholder({ id: i }) : directives[i] }`
    }, ''));

    directives.forEach((directive, id) => {
      return directive.handler && directive.handler({ id, funcs, elem: template.querySelector(`[data-ms="${id}"]`) || template, store });
    });

    return template;
  }
}
