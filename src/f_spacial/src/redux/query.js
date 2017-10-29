/***
 * Action / Reducer file to tell us where we are in the app
 *
 */

/**********************************
 *        ACTIONS SECTION         *
 **********************************/

const QueryConstants = {
  QUERY: 'QUERY'
}

export const QueryActions = {
  query: (string) => {
    return dispatch => {
      dispatch({
        type: QueryConstants.QUERY,
        query: string,
      })
    }
  },
}

 /*********************************
 *        REDUCER SECTION         *
 **********************************/

const defaultQueryState = {
  query: "",
}

export const queryReducer = (state = defaultQueryState, action) => {
  switch(action.type) {
    case QueryConstants.QUERY:
      return Object.assign({}, state, {
        query: action.query
      });
    default:
      return state;
  }
}
