export const list = select => ({
  handler: ({ id, funcs, elem, store }) => {
    const { parentNode } = elem;

    const updateList = () => {
      while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
      }
      select(store).forEach((node) => {
        parentNode.appendChild(node);
      })
    }

    funcs.add(updateList);
  },
  placeholder: ({ id }) => `<template data-ms-${id}></template>`,
});
