/***
 * Action / Reducer file to tell us where we are in the app
 *
 */

/**********************************
 *        ACTIONS SECTION         *
 **********************************/
import WidgetTypeNames from '../constants/widgets';
import { WidgetActionNames } from './widgets';

const QueryConstants = {
  QUERY: 'QUERY',
  QUERY_BEGIN: 'QUERY_BEGIN',
  QUERY_FINISH: 'QUERY_FINISH'
}

export const QueryActions = {
  query: (string) => {
    return dispatch => {
      dispatch({
        type: QueryConstants.QUERY,
        query: string,
      })
      dispatch({
        type: QueryConstants.QUERY_BEGIN
      });
      let queryTimeIdentifier = new Date();
      dispatch({
        type: WidgetActionNames.ADD,
        widget: {
          type: WidgetTypeNames.PENDING,
          created_at: queryTimeIdentifier
        }
      })
      fetch(`http://localhost:16198/papers?query=${string}`)
      .then(response => response.json())
      .then(json =>
          {
          if(json.error) {
            dispatch({
              type: WidgetActionNames.UPDATE,
              widget: {
                type: WidgetTypeNames.ERROR,
                data: Object.assign({}, {result:json}, {query:string}),
                created_at: new Date()
              },
              queryTimestamp: queryTimeIdentifier
            });
          }else {
            dispatch({
              type: WidgetActionNames.UPDATE,
              widget: {
                type: WidgetTypeNames.RESULTS,
                data: Object.assign({}, {result:json}, {query:string}),
                created_at: new Date()
              },
              queryTimestamp: queryTimeIdentifier
            });
          }
        dispatch({
          type: QueryConstants.QUERY_FINISH,
          results: json
        });
      });
    }
  },
}

 /*********************************
 *        REDUCER SECTION         *
 **********************************/

const defaultQueryState = {
  query: "",
  isFetching: false,
  results: []
}

export const queryReducer = (state = defaultQueryState, action) => {
  switch(action.type) {
    case QueryConstants.QUERY:
      return Object.assign({}, state, {
        query: action.query
      });
    case QueryConstants.QUERY_BEGIN:
      return Object.assign({}, state, {
        isFetching: true
      });
    case QueryConstants.QUERY_FINISH:
      return Object.assign({}, state, {
        isFetching: false,
        results: action.results
      });
    default:
      return state;
  }
}
