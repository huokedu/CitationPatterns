export const SelectActionNames = {
  ADD: 'ADDPAPERS'
};

export const SelectActions = {
  add: (papers) => {
    return dispatch => {
      dispatch({
        type: SelectActionNames.ADD,
        papers: papers
      })
    }
  },
};

const defaultSelectState = {
  papers: []
};

export const selectReducer = (state = defaultSelectState, action) => {
  switch(action.type) {
    case SelectActionNames.ADD:
      let newPapers = [...new Set([...state.papers, ...action.papers])];
      return Object.assign({}, state, {papers: newPapers});
    default:
      return state;
  }
};
