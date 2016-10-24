import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeFormReduce from "./EmployeeFromReducer";

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReduce
});