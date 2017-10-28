/***
 * Action / Reducer file to tell us where we are in the app
 *
 */

/**********************************
 *        ACTIONS SECTION         *
 **********************************/

const WidgetConstants = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  TOGGLE: 'TOGGLE'
}

export const WidgetNames = [
  'RESULTS',
  'MAP',
]

export const WidgetActions = {
  toggle: (widget) => {
    return dispatch => {
      dispatch({
        type: WidgetConstants.TOGGLE,
        widget: widget,
      })
    }
  },
  add: (widget) => {
    return dispatch => {
      dispatch({
        type: WidgetConstants.ADD,
        widget: widget,
      })
    }
  },
  remove: (widget) => {
    return dispatch => {
      dispatch({
        type: WidgetConstants.REMOVE,
        widget: widget
      })
    }
  }
}

 /*********************************
 *        REDUCER SECTION         *
 **********************************/

const defaultWidgetState = {
  RESULTS: false,
  MAP: false,
  GRAPH: false,
}

export const widgetReducer = (state = defaultWidgetState, action) => {
  switch(action.type) {
    case WidgetConstants.TOGGLE:
      switch(action.widget.type){
        case 'RESULTS':
          return Object.assign({}, state, {
            RESULTS: !state.RESULTS
          })
        case 'MAP':
        return Object.assign({}, state, {
          MAP: !state.MAP
        })
        default:
          return state;
      }
    default:
      return state;
  }
}
