import { combineReducers } from 'redux'
import authReducer from './authReducer'
import salReducer from './salReducer'

const rootReducer = combineReducers({
    profile: authReducer,
    salon: salReducer
})

export default rootReducer