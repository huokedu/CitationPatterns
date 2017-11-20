/***
 * Action / Reducer file to tell us where we are in the app
 *
 */

/**********************************
 *        ACTIONS SECTION         *
 **********************************/
import WidgetType from '../constants/widgets';
import { WidgetActionNames } from './widgets';

const QueryConstants = {
  QUERY: 'QUERY',
  QUERY_BEGIN: 'QUERY_BEGIN',
  QUERY_FINISH: 'QUERY_FINISH'
};

export const QueryActions = {
  query: (queryString) => {
    return (dispatch, getState) => {
      dispatch({
        type: QueryConstants.QUERY,
        query: queryString,
      });
      dispatch({
        type: QueryConstants.QUERY_BEGIN
      });
      let queryTimeIdentifier = new Date();
      dispatch({
        type: WidgetActionNames.ADD,
        widget: {
          type: WidgetType.PENDING.NAME,
          data: {
                  query: queryString
          },
          created_at: queryTimeIdentifier
        }
      });
      fetch(getState().dataset.url +`/query?title=${queryString}`)
      .then(response => response.json())
      .then(json =>
          {
          if(json.error) {
            dispatch({
              type: WidgetActionNames.UPDATE,
              widget: {
                type: WidgetType.ERROR.NAME,
                data: Object.assign({}, {result: json}, {query: queryString}),
                created_at: queryTimeIdentifier
              },
              queryTimestamp: queryTimeIdentifier
            });
          }else {
            dispatch({
              type: WidgetActionNames.UPDATE,
              widget: {
                type: WidgetType.RESULTS.NAME,
                data: Object.assign({}, {resultSet: json}, {query: queryString}),
                created_at: queryTimeIdentifier
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
  querySingle: (id, title) => {
    return (dispatch, getState) => {
      dispatch({
        type: QueryConstants.QUERY,
        query: id,
      });
      dispatch({
        type: QueryConstants.QUERY_BEGIN
      });
      let queryTimeIdentifier = new Date();
      dispatch({
        type: WidgetActionNames.ADD,
        widget: {
          type: WidgetType.PENDING.NAME,
          data: {
            query: title
          },
          created_at: queryTimeIdentifier
        }
      });
      fetch(getState().dataset.url +`/papers/${id}`)
      .then(response => response.json())
      .then(json =>
          {
          if(json.error) {
            dispatch({
              type: WidgetActionNames.UPDATE,
              widget: {
                type: WidgetType.ERROR.NAME,
                data: Object.assign({}, {result: json}, {query: title}),
                created_at: queryTimeIdentifier
              },
              queryTimestamp: queryTimeIdentifier
            });
          }else {
            dispatch({
              type: WidgetActionNames.UPDATE,
              widget: {
                type: WidgetType.SHOW_PAPER.NAME,
                data: json,
                created_at: queryTimeIdentifier
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
  }
};

 /*********************************
 *        REDUCER SECTION         *
 **********************************/

const defaultQueryState = {
  query: "",
  isFetching: false,
  results: []
};

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
};
