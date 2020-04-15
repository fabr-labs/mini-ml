export function microScope(reducers) {
  return 
}

function optionsPage(state = {
  options: [1, 2, 3, 4],
}, action) {
  switch (action.type) {
    case 'SET_OPTIONS': 
      return {
        ...state,
        options: action.options,
      }

    default:
      break;
  }
}

function infoPages(state = {
  showPage: 0,
}, action) {
  switch (action.type) {
    case 'SET_INFO_PAGE': 
      return {
        ...state,
        showPage: action.page,
      }

    default:
      break;
  }
}

microScope([optionsPage, infoPages]);