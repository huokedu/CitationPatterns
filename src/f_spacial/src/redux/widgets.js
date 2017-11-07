/***
 * Action / Reducer file to tell us where we are in the app
 *
 */

/**********************************
 *        ACTIONS SECTION         *
 **********************************/

export const WidgetActionNames = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  UPDATE: 'UPDATE'
}


export const WidgetActions = {
  add: (widget) => {
    return dispatch => {
      dispatch({
        type: WidgetActionNames.ADD,
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
        type: WidgetActionNames.REMOVE,
        widget: widget
      })
    }
  },
  update: (widget, queryTimestamp) => {
    return dispatch => {
      dispatch({
        type: WidgetActionNames.UPDATE,
        widget: widget,
        queryTimestamp: queryTimestamp
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
  let newWidgets = state.widgets;
  switch(action.type) {
    case WidgetActionNames.ADD:
      newWidgets.push(action.widget);
      return Object.assign({}, state, {
        widgets: newWidgets
      });
    case WidgetActionNames.UPDATE:
      newWidgets[newWidgets.indexOf(newWidgets.find(x => x.created_at === action.queryTimestamp))] = action.widget;
      return Object.assign({}, state, {
        widgets: newWidgets
      });
    default:
      return state;
  }
}
