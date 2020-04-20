export const classList = select => ({
  handler({ funcs, elem, store }) {
    funcs.push(() => {
      for (const [klass, add] of Object.entries(select(store))) {
        elem.classList[add ? 'add' : 'remove' ](klass)
      }
    });
  },
  placeholder: ({ ins, id }) => ` data-ms="${id}"`
});