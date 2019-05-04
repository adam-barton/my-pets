import { combineReducers } from 'redux';
import petsReducer from './pets_reducer';
import remindersReducer from './reminders_reducer';

export default combineReducers({
    petsReducer,
    remindersReducer
});