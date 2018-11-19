import initialState from '../../redux/initialState';
import {GET_COLOR_LIST} from "./action";
import {combineReducers} from "redux";

function colorListReducer(state = initialState.reduxComponent.colorList, action) {
    switch (action.type) {
        case GET_COLOR_LIST:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    colorList: colorListReducer,
});
