import reduxComponent from '../views/reduxComponent/reducer';
import sagaComponent from '../views/sagaComponent/reducer';
import {combineReducers} from "redux";

export default combineReducers({
    reduxComponent,
    sagaComponent
})