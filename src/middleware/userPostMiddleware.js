import axios from "axios"
import { userPost, userPostSuccess, userPostFailed } from '../action/userPostAction'
    
    
    
const SERVER_URL = 'https://jsonplaceholder.typicode.com/posts'

const userPostMiddleware = () => {
    return (dispatch) => {
        axios.get(SERVER_URL).then(res => {
            
            dispatch(userPost())

            dispatch(userPostSuccess(res.data))
        }).catch(err => { 
            dispatch(userPostFailed())
        })
    }
}


export default userPostMiddleware