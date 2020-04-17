export const show = select => ({
  handler: ({ funcs, elem, proxy }) => funcs.push(() => elem.style.display = select(proxy) ? '' : 'none'),
  placeholder: ({ id }) => ` data-ms="${id}"`,
});