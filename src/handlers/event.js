export const event = (key, select) => ({
  handler({ funcs, elem, proxy }) {
    const { parentNode } = elem;
    funcs.push(() => parentNode.innerText = select(proxy));
  },
  placeholder: ({ id }) => ` data-ms="${id}"`,
});