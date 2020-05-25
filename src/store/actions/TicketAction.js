import actiontypes from './actiontypes'
const apiurl = 'http://localhost:9999/api/tickets'

export const createTicket = (ticket) => dispatch => {
    const token = sessionStorage.getItem("jwt")
    fetch(`${apiurl}/new`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': 'bearer ' + token
        },
        body: JSON.stringify(ticket)
    })
    .then(res => res.json())
    .then(res => {
        dispatch({
            type: actiontypes.FETCH_START_TICKET
        }) 
        dispatch({
            type: actiontypes.FETCH_NEW_TICKET,
            TICKETS: res
        })
    })
    .catch(() => {
        dispatch({
            type: actiontypes.FETCH_FAILED_TICKET
        })       
    }) 
}