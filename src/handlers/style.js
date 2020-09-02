export const style = (property, select) => ({
  handler: ({ funcs, elem, store }) => {
    funcs.add(() => elem.style[property] = select(store));
  },
  placeholder: ({ id }) => ` data-ms-${id}`,
});