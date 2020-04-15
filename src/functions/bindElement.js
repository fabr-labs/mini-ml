export function bindElement({ id, cssText, classList, innerText, innerHTML, onclick, onBody, embed }) {
  const elem = document.createDocumentFragment();

  // if (id) elem.setAttribute('id', id);

  // if (cssText) elem.style.cssText = cssText;

  // if (classList) elem.classList.add(classList); 

  // if (innerText) elem.innerHTML = innerText;

  // if (innerHTML) elem.innerHTML = innerHTML;

  // if (onclick && !onclick.selector) elem.addEventListener('click', onclick);

  // if (onclick && onclick.selector) {
  //   const target = elem.querySelector(onclick.selector);
  //   target.addEventListener('click', onclick.handler);
  // }

  // if (onBody) document.body.appendChild(elem);

  // if (embed) {
  //   embed.forEach(({ selector, children }) => {
  //     const target = elem.querySelector(selector);
  //     children.map(child => target.appendChild(child));
  //   });
  // }

  return elem;
}
