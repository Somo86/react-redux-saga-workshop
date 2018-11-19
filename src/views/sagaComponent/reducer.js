import initialState from '../../redux/initialState';
import { FETCH_COLOR_LIST_SUCCESS } from "./action";
import { combineReducers } from "redux";

function colorListReducer(state = initialState.sagaComponent.colorList, action) {
    switch (action.type) {
        case FETCH_COLOR_LIST_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    colorList: colorListReducer,
});
