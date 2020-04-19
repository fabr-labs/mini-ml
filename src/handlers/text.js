export const text = select => ({
  handler: ({ id, funcs, elem, proxy }) => {
    // We need to keep the parentNode in scope as template will be overwritten.
    const { parentNode } = elem;
    const updateText = () => {
      parentNode.innerText = select(proxy);
    }

    funcs.add(updateText);
  },
  placeholder: ({ id }) => `<template data-ms="${id}"></template>`,
});
