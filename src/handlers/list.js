export const list = select => ({
  handler: ({ id, funcs, elem, proxy }) => {
    const { parentNode } = elem;

    const updateList = () => {
      while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
      }
      select(proxy).forEach((node) => {
        parentNode.appendChild(node);
      })
    }

    funcs.add(updateList);
  },
  placeholder: ({ id }) => `<template data-ms="${id}"></template>`,
});
