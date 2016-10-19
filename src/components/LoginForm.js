import React, {Component} from 'react';
import {TextInput, Text} from 'react-native';
import firebase from "firebase";
import {Button, Card, CardSection, Input, Spinner} from "./common";
import {connect} from "react-redux";
import {emailChanged} from "../actions";


class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    render() {

        return (
            <Card>
                <CardSection>
                    <Input label="Email" placeholder="email@gmail.com" value={this.props.email}
                           onChangeText={this.onEmailChange.bind(this)}/>
                </CardSection>
                <CardSection>
                    <Input label="Password" placeholder="password"/>
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}
const styles = {

    errorTestStyle: {
        fontSize: 20,
        alignSelf: "center",
        color: "red"
    }
};
const mapStateToProps = state => {
    return {
        email: state.auth.email
    };
};


export default connect(mapStateToProps, {emailChanged})(LoginForm);