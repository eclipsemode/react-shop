function typeReducer(state, action) {
  if (action.payload === 0) return 0;
  else return 1;
}

function sizeReducer(state, action) {
  if (action.payload === 0) return 0;
  else if (action.payload === 1) return 1;
  else return 2;
}

export { typeReducer, sizeReducer };
