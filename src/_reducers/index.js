import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducers';

const rootReducer = combineReducers({
  authentication,
  registration
});

export default rootReducer;
