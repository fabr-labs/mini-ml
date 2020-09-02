export const component = select => ({
  handler: ({ id, funcs, elem, store }) => {
    const { parentNode } = elem;
    parentNode.replaceChild(select(store), elem);
  },
  placeholder: ({ id }) => `<div data-ms-${id}></div>`,
});