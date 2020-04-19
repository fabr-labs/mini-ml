import { microScope } from '../../src/microscope.js';

export const component = select => ({
  handler: ({ id, funcs, elem, proxy }) => {
    // We need to keep the parentNode in scope as template will be overwritten.
    const { parentNode } = elem;

    console.log('ADD FUNC TO FUNCS ARRAY!')
    funcs.push(() => {
      console.log('CALLEED!?')
      parentNode.replaceChild(select(proxy)({ funcs }), elem)
    });
  },
  placeholder: ({ id }) => `<template data-ms="${id}"></template>`,
});