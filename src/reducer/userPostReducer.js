import { USER_POST, USER_POST_SUCCESS, USER_POST_FAILED } from '../action/actionType'

const initState = {
    posts: [],
    isLoadding: false,
    errorMessage: ''
}

const userPostReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case USER_POST: { 
            return {
                ...state, isLoadding: true 
            }
        }
        case USER_POST_SUCCESS: { 
            return {
                ...state, isLoadding: false, posts: payload
            }
        }
        case USER_POST_FAILED: {
            return {
                ...state, isLoadding: false, errorMessage:'Fetch post data failed' 
            }
        }
                          
        default:
            return state
    }
}

export default userPostReducer