export const text = select => ({
  handler: ({ id, funcs, elem, proxy }) => {
    // We need to keep the parentNode in scope as template will be overwritten.
    const { parentNode } = elem;
    funcs.push(() => {
      parentNode.innerText = select(proxy);
    });
  },
  placeholder: ({ id }) => `<template data-ms="${id}"></template>`,
});
