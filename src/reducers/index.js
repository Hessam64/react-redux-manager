import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeFormReduce from "./EmployeeFromReducer";
import EmployeeReducer from "./EmployeeReducer";

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReduce,
    employees: EmployeeReducer
});