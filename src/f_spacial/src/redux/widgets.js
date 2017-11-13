/***
 * Action / Reducer file to tell us where we are in the app
 *
 */

/**********************************
 *        ACTIONS SECTION         *
 **********************************/
import WidgetType from '../constants/widgets';

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
        widget: widget,
        queryTimestamp: widget.created_at
      })
    }
  },
  update: (queryTimestamp) => {
    return dispatch => {
      dispatch({
        type: WidgetActionNames.UPDATE,
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

// Since a widget object should keep all the information necessary to
// display the widget we add all the needed strings associated with
// headers
// to the object before returning an changed state
function addDisplayStringsToWidget (widget) {
  console.log("test");
  console.log(widget.type);
  const header_type = WidgetType[widget.type].description;
  return Object.assign({}, widget, { header_type: header_type});
}

// exporting the reducer construct
// the reducer construct keeps all the different actions
// which change the widgets state
export const widgetReducer = (state = defaultWidgetState, action) => {
  // Rename the Widgets field of the state
  // because we only want to change this field
  let newWidgets = state.widgets;
  // Rename the widget passed by the action
  let givenWidget = action.widget;
  // Return new state depended on current action
  switch(action.type) {
    // Adding a new Widget
    case WidgetActionNames.ADD:
      // Adding the received widget to the widgets array
      newWidgets.push(addDisplayStringsToWidget(givenWidget));
      // Return the new state with the changed widgets array
      return Object.assign({}, state, {
        widgets: newWidgets
      });
    // Updating an existing widget
    case WidgetActionNames.UPDATE:
      // Finding the widget to update in the widgets array of the state and replacing it with the received widget
      newWidgets[newWidgets.indexOf(newWidgets.find(x => x.created_at === action.queryTimestamp))] = addDisplayStringsToWidget(givenWidget);
      // Return the new state with the changed widgets array
      return Object.assign({}, state, {
        widgets: newWidgets
      });
    // Removing a widget from the state
    case WidgetActionNames.REMOVE:
      // Finding the widget to delete in the widgets array and splicing it from it
      newWidgets.splice(newWidgets.indexOf(newWidgets.find(x => x.created_at === action.queryTimestamp)),1);
      // Return the new state with the changed widgets array
      return Object.assign({}, state, {
        widgets: newWidgets
      });
    default:
      // When a unknown action is passed we should return the state unchanged
      return state;
  }
}
