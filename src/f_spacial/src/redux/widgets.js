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
}

export const WidgetNames = {
  RESULTS: 'RESULTS',
  MAP: 'MAP',
  ERROR: 'ERROR'
}

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
        widget: {
          type: widget.type,
          data: widget.data,
          created_at: new Date()
        }
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
  widgets: []
}

export const widgetReducer = (state = defaultWidgetState, action) => {
  switch(action.type) {
    case WidgetConstants.ADD:
      switch(action.widget.type) {
        case WidgetNames.RESULTS: {
          /* TODO: use object.assign() */
          let newWidgets = state.widgets;
          newWidgets.push(action.widget);
          return Object.assign({}, state, {
            widgets: newWidgets
          });
        }
        default:
          return state;
    }
    default:
      return state;
  }
}
