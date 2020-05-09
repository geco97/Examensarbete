import actiontypes from './actiontypes'
const apiurl = 'http://localhost:9999/api/beautyCenters'

export const getAllSalons = () => dispatch => {
    fetch(`${apiurl}/getAll`, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
        dispatch({
            type: actiontypes.FETCH_ALL_SALONS,
            Salons: res.Salons
        })
    })
    .catch(() => {
        dispatch({
            type: actiontypes.FETCH_FAILED
        })       
    }) 
}