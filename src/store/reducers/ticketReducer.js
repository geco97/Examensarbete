import actiontypes from '../actions/actiontypes';
const initialState = {
    TicketList: {},
    Error: null,
    CurrentTicket:{},
    isLoading:false
}

const ticketReducer = (state = initialState, action) => {
    switch(action.type) {
        case actiontypes.FETCH_FAILED_TICKET:
            console.log("FETCH_FAILED_TICKET")
            return {
                ...state,
                Error: 'fetch failed'
            }
        case actiontypes.FETCH_START_TICKET:
            console.log("FETCH_START_TICKET")
            return {
                ...state,
                isLoading: true
            }
        case actiontypes.FETCH_NEW_TICKET:
            console.log("FETCH_NEW_TICKET")
            return {
                ...state,
                TicketList: action.TICKETS.Cards
            }
        case actiontypes.FETCH_TICKETS:
            console.log("FETCH_TICKETS",action.Salon.Cards)
            return {
                ...state,
                TicketList:action.Salon.Cards
            }
        default:
            return {
                ...state
           }
    }
}
export default ticketReducer