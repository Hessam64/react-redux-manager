import React, {Component} from "react";
import {View, Text} from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import LoginForm from "./components/LoginForm";
class App extends Component {

    componentWillMount() {

        const config = {
            apiKey: "AIzaSyDmm9we-5o1uctO0CJqJbViGpkFdyGC5Bo",
            authDomain: "manager-f7328.firebaseapp.com",
            databaseURL: "https://manager-f7328.firebaseio.com",
            storageBucket: "",
            messagingSenderId: "392615566179"
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm/>
            </Provider>
        );
    }
}

export default App;