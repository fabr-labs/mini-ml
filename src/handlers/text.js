export const text = select => ({
  handler: ({ id, funcs, elem, store }) => {
    // We need to keep the parentNode property in scope as template will be overwritten.
    const { parentNode } = elem;

    // Overwrite template.
    const updateText = () => {
      parentNode.innerText = select(store);
    }

    funcs.add(updateText);
  },
  placeholder: ({ id }) => `<template data-ms-${id}></template>`,
});
