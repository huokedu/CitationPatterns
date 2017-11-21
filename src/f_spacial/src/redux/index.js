/**
* create-react-app-intro
* Redux reducer index file
* author: @
*/

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { widgetReducer } from './widgets';
import { queryReducer } from './query';
import { selectReducer } from './select';
import { datasetReducer } from './datasets';

export default combineReducers({
  routing: routerReducer,
  widgets: widgetReducer,
  query: queryReducer,
  select: selectReducer,
  dataset: datasetReducer,
});
