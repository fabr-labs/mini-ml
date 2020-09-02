export const disabled = (select) => ({
  handler: ({ funcs, elem, store }) => {
    funcs.add(() => select(store) ? elem.setAttribute('disabled', true) : elem.removeAttribute('disabled'));
  },
  placeholder: ({ id }) => ` data-ms-${id}`,
});