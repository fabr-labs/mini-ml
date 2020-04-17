export const event = (key, select) => ({
  handler: ({ elem, proxy }) => {
    console.log(elem, key)
    elem.addEventListener(key, (event) => select(event, proxy));
  },
  placeholder: ({ id }) => ` data-ms="${id}"`,
});