import { createStore, combineReducers} from 'redux';
import CountReducer from './reducers/cartreducers';
 
const rootReducer = combineReducers({
  cart: CountReducer,
});
 
export const store = createStore(rootReducer);