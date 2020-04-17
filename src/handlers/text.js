export const text = select => ({
  handler({ id, funcs, elem, proxy }) {
    const { parentNode } = elem;
    funcs.push(() => parentNode.innerText = select(proxy));
  },
  placeholder: ({ id }) => `<div data-ms="${id}"></div>`,
});
