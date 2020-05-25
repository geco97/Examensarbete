import { combineReducers } from 'redux'
import authReducer from './authReducer'
import salReducer from './salReducer'
import ticketReducer from './ticketReducer'

const rootReducer = combineReducers({
    profile: authReducer,
    salon: salReducer,
    ticket:ticketReducer
})

export default rootReducer