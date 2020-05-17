import actiontypes from './actiontypes'

const apiurl = 'http://localhost:9999/api/users'

export const register = (credentials) => dispatch => {

    fetch(apiurl + '/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(res => {

        console.log(res)

        if(res.success) {
            dispatch({
                type: actiontypes.REGISTER_SUCCESS,
                success: res.success 
            })

            sessionStorage.setItem('token', res.token)

        } else {
            dispatch({
                type: actiontypes.REGISTER_ERROR
            })            
        }
    })
  
}

export const login = (credentials) => dispatch => {

    fetch(`${apiurl}/login`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        console.log("Login",res)
        if(res.success) {  
            sessionStorage.setItem('jwt', res.token)  
            localStorage.setItem('User', JSON.stringify(res.user))           
            dispatch({
                type: actiontypes.LOGIN_SUCCESS,
                payload: res 
            })
            
        } else {
            dispatch({
                type: actiontypes.LOGIN_ERROR
            })            
        }
        
    })
    .catch(() => {
        dispatch({
            type: actiontypes.LOGIN_FATAL_ERROR
        })       
    })
}

export const logout = () => dispatch => {

    dispatch({
        type: actiontypes.LOGOUT_SUCCESS
    })

    sessionStorage.removeItem('jwt')
    localStorage.removeItem('User')

}

export const get = (_id) => dispatch => {
    const token = sessionStorage.getItem("jwt")

    fetch(`${apiurl}/get/${_id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': 'bearer ' + token
        }
    })
    .then(res => res.json())
    .then(res => {
        dispatch({
            type: actiontypes.GET_PROFILE_SUCCESS,
            user: res.data
        })

        sessionStorage.setItem('user', JSON.stringify(res.currentUser))
    })       

}

export const update = (user) => dispatch => {
    const jwt = sessionStorage.getItem("jwt")
    fetch(`${apiurl}/update/${user._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'authorization': 'bearer ' + jwt
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {
        //sessionStorage.removeItem('jwt')
     //   sessionStorage.setItem('jwt', JSON.stringify(res.token))
        sessionStorage.setItem('user', JSON.stringify(res.user))

        dispatch({
            type: actiontypes.UPDATE_PROFILE_SUCCESS,
            data: res
        })

        
    })       

}

