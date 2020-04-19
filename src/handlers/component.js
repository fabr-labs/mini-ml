export const component = select => ({
  handler: ({ id, funcs, elem, proxy }) => {
    const { parentNode } = elem;

    funcs.push(() => {
      parentNode.replaceChild(select(proxy), elem)
    });
  },
  placeholder: ({ id }) => `<template data-ms="${id}"></template>`,
});