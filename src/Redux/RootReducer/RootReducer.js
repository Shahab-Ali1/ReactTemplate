import { combineReducers } from 'redux'
import ExampleReducer from '../Reducer/Example/Example'
import AuthReducer from '../Reducer/Auth/Auth'

export const rootReducer = combineReducers({
    ExampleTesting: ExampleReducer,
    AuthReducer: AuthReducer
})