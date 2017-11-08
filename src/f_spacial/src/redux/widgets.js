/***
 * Action / Reducer file to tell us where we are in the app
 *
 */

/**********************************
 *        ACTIONS SECTION         *
 **********************************/
import { WidgetTypeDescriptions } from '../constants/widgets';

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
  let newWidget = action.widget;
  switch(action.type) {
    case WidgetActionNames.ADD:
      newWidget = Object.assign({}, newWidget, { header_type: WidgetTypeDescriptions[newWidget.type] });
      console.log(newWidget);
      newWidgets.push(newWidget);
      return Object.assign({}, state, {
        widgets: newWidgets
      });
    case WidgetActionNames.UPDATE:
      newWidget = Object.assign({}, newWidget, { header_type: WidgetTypeDescriptions[newWidget.type] });
      newWidgets[newWidgets.indexOf(newWidgets.find(x => x.created_at === action.queryTimestamp))] = newWidget;
      return Object.assign({}, state, {
        widgets: newWidgets
      });
    default:
      return state;
  }
}
