import { createStore } from '../simple_state';
import appReducer from './reducer';
import { defaultData } from '../data/default_data';

const store = createStore(appReducer, defaultData);

export default store;
