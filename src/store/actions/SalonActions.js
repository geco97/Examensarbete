import actiontypes from './actiontypes'
const apiurl = 'http://localhost:9999/api/beautyCenters'

export const getAllSalons = () => dispatch => {
    fetch(`${apiurl}/getAll`, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
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