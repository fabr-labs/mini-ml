export const event = (key, select) => ({
  handler: ({ elem, store }) => {
    elem.addEventListener(key, (event) => select(event, store));
  },
  placeholder: ({ id }) => ` data-ms-${id}`,
});