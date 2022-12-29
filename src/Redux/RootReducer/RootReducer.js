import { combineReducers } from 'redux'
import ExampleReducer from '../Reducer/Example/Example'

export const rootReducer = combineReducers({
    ExampleTesting: ExampleReducer
})