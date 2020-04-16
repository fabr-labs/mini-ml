import { createTemplate } from './functions/createTemplate.js';

export function microScope({ state: init, config = { inserts: ['text', 'component'] }}) {

  console.log(config)

  const funcs = [];

  const handler = {
    set(target, property, value) {
      target[property] = value;
      funcs.forEach(func => func(target));
      return true;
    }
  };

  const proxy = new Proxy(init, handler);

  return (strings, ...directives) => {
    const template = createTemplate(strings.reduce((acc, value, i) => {
      return i === strings.length - 1 ? `${acc}${value}` : directives[i] ? `${acc}${value}<template data-ms="${i}"></template>` : `${acc}${value} data-ms="${i}"`;
    }, ``));

    directives.forEach((directive, i) => {
      for (const [key, select] of Object.entries(directive)) {
        const elem = template.querySelector(`[data-ms="${i}"]`);
        switch (key) {
          case 'text':
            const { parentNode } = elem;
            funcs.push(() => parentNode.innerText = select(proxy));
            break;

          case 'class':
            funcs.push(() => {
              for (const [klass, add] of Object.entries(select(proxy))) {
                elem.classList[add ? 'add' : 'remove' ](klass)
              }
            });
            break;

          case 'if':
            funcs.push(() => elem.style.display = select(proxy) ? '' : 'none');
            break;

          case 'component':
            funcs.push(() => elem.style.display = select(proxy) ? '' : 'none');
            break;
        
          default:
            elem.addEventListener(key, (event) => select(event, proxy));
            break;
        }
      }
    });
    proxy._ready = true;
    return template;
  }
}
