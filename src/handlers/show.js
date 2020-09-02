export const show = select => ({
  handler: ({ funcs, elem, store }) => funcs.add(() => elem.style.display = select(store) ? '' : 'none'),
  placeholder: ({ id }) => ` data-ms-${id}`,
});