export const list = select => ({
  handler: ({ id, funcs, elem, proxy }) => {
    const { parentNode } = elem;

    funcs.push(() => {
      select(proxy).forEach((elem) => {
        parentNode.appendChild(elem);
      })
    });
  },
  placeholder: ({ id }) => `<template data-ms="${id}"></template>`,
});
