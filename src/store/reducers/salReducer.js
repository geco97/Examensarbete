import actiontypes from '../actions/actiontypes';
const initialState = {
    salonList: {},
    Error: null,
    currentSalon:{}
}

const salReducer = (state = initialState, action) => {
    switch(action.type) {
        case actiontypes.FETCH_FAILED:
            console.log('register error')
            return {
                ...state,
                Error: 'fetch failed'
            }
        case actiontypes.FETCH_ALL_SALONS:
            console.log('FETCH_ALL_SALONS')
            return {
                ...state,
                Error: null,
                salonList: action.Salons.salonList
            }
            //FETCH_THIS_SALON
            case actiontypes.FETCH_THIS_SALON:
                console.log('FETCH_THIS_SALON')
                console.log(action)
                return {
                    ...state,
                    Error: null,
                    currentSalon: action.Salon
                }
        default:
            return {
                ...state
           }
        
    }
}
export default salReducer