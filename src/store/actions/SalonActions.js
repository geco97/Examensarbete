import actiontypes from './actiontypes'
const apiurl = 'http://localhost:9999/api/beautyCenters'
const apiurl3 = 'http://localhost:9999/api/tickets'

export const getAllSalons = () => dispatch => {
    fetch(`${apiurl}/getAll`, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
        dispatch({
            type: actiontypes.FETCH_START
        }) 
        dispatch({
            type: actiontypes.FETCH_ALL_SALONS,
            Salons: res
        })
    })
    .catch(() => {
        dispatch({
            type: actiontypes.FETCH_FAILED
        })       
    }) 
}
export const getthisSalon = (id) => dispatch => {
    fetch(`${apiurl}/get?id=`+id, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
        dispatch({
            type: actiontypes.FETCH_START
        }) 
        dispatch({
            type: actiontypes.FETCH_THIS_SALON,
            Salon: res
        })
    })
    .catch(() => {
        dispatch({
            type: actiontypes.FETCH_FAILED
        })       
    }) 
}

//getThisSalonTicket
export const getThisSalonTicket = (id) => dispatch => {
    const token = sessionStorage.getItem("jwt")
    fetch(`${apiurl3}/Cards/${id}`,  {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': 'bearer ' + token
        }
    })
    .then(res => res.json())
    .then(res => {
        dispatch({
            type: actiontypes.FETCH_START_TICKET
        }) 
        dispatch({
            type: actiontypes.FETCH_TICKETS,
            Salon: res
        })
    })
    .catch(() => {
        dispatch({
            type: actiontypes.FETCH_FAILED_TICKET
        })       
    }) 
}