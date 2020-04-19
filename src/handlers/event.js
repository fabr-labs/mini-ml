export const event = (key, select) => ({
  handler: ({ elem, proxy }) => {
    elem.addEventListener(key, (event) => select(event, proxy));
  },
  placeholder: ({ id }) => ` data-ms="${id}"`,
});