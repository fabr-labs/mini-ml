export const classList = select => ({
  handler({ funcs, elem, proxy }) {
    funcs.push(() => {
      for (const [klass, add] of Object.entries(select(proxy))) {
        elem.classList[add ? 'add' : 'remove' ](klass)
      }
    });
  },
  placeholder: ({ ins, id }) => ` data-ms="${id}"`
});