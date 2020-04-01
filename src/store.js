import { createStore, applyMiddleware } from 'redux'
import userPostReducer from './reducer/userPostReducer'
import thunk from 'redux-thunk'

const store = createStore(userPostReducer, applyMiddleware(thunk))


export default store