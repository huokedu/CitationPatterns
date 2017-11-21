/***
 * Action / Reducer file to tell us where we are in the app
 *
 */

/**********************************
 *        ACTIONS SECTION         *
 **********************************/
import { api_routes } from '../config/configure_api';

const DatasetsConstants = {
  CHANGE: 'CHANGE',
};

export const DatasetsActions = {
  change: (dataset) => {
    return dispatch => {
      dispatch({
        type: DatasetsConstants.CHANGE,
        dataset: dataset,
      });
    }
  }
};

function getURLFromDataset(dataset) {
  return api_routes.schema + api_routes.namespace + dataset.route
}
 /*********************************
 *        REDUCER SECTION         *
 **********************************/

const defaultDatasetState = {
  api: api_routes.datasets[1],
  url: getURLFromDataset(api_routes.datasets[1])
};

export const datasetReducer = (state = defaultDatasetState, action) => {
  switch(action.type) {
    case DatasetsConstants.CHANGE:
      return Object.assign({}, state, {
        api: action.dataset,
        url: getURLFromDataset(action.dataset)
      });
    default:
      return state;
  }
};
