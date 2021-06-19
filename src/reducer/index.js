import { combineReducers } from 'redux';
import user from './user'
import loading from './loading'
import home from './home'
const reducers = combineReducers({
  user, loading,  home
})

export default reducers