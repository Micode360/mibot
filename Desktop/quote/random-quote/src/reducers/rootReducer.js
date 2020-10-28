import { combineReducers } from 'redux';
import sectionReducer from './sectionReducer';


const rootReducer = combineReducers({
    section: sectionReducer
});


export default rootReducer;