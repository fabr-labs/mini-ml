export const attr = (attr, select) => ({
  handler: ({ funcs, elem, store }) => {
    funcs.add(() => elem.setAttribute(attr, select(store)));
  },
  placeholder: ({ id }) => ` data-ms-${id}`,
});