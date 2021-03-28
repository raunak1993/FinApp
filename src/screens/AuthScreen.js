import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    TextInput,
    KeyboardAvoidingView,
    ActivityIndicator,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Colors } from '../constants';
import { login, signup } from '../action/auth';

class AuthScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSignUp: false,
            isLoading: false,
            name: '',
            password: '',
        };
    }

    componentDidMount() {
        const { navigation } = this.props;

        navigation.setOptions({
            title: this.state.isSignUp ? 'Sign Up' : 'Login',
        });
    }

    componentDidUpdate() {
        const { navigation } = this.props;

        navigation.setOptions({
            title: this.state.isSignUp ? 'Sign Up' : 'Login',
        });
    }

    textChangeHandler = (text, field) => {
        this.setState({
            [field]: text,
        });
    };

    changeScreen = () => {
        this.setState({
            isSignUp: !this.state.isSignUp,
        });
    };

    authHandler = () => {
        const { name, password } = this.state;
        this.setState({
            isLoading: true,
        });

        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
            (this.state.isSignUp
                ? this.props.signup(name, password)
                : this.props.login(name, password));
        }, 1000)


    };

    render() {
        const { isSignUp, isLoading, name, password } = this.state;

        return (
            <KeyboardAvoidingView style={styles.screen}>
                <View style={styles.content}>
                    <TextInput
                        style={styles.textInput}
                        value={name}
                        placeholder="Enter name..."
                        onChangeText={(text) => this.textChangeHandler(text, 'name')}
                    />
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry
                        placeholder="Enter password..."
                        value={password}
                        onChangeText={(text) => this.textChangeHandler(text, 'password')}
                    />
                    <View style={styles.buttonContainer}>
                        {isLoading ? (
                            <ActivityIndicator size="small" color={Colors.primary} />
                        ) : (
                                <Button
                                    title={isSignUp ? 'Sign up' : 'login'}
                                    color={Colors.primary}
                                    onPress={this.authHandler}
                                />
                            )}
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                            title={isSignUp ? 'Switch to login' : 'Switch to signup'}
                            color={Colors.primary}
                            onPress={this.changeScreen}
                        />
                    </View>
                </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        backgroundColor: 'white',
        paddingBottom: 10,
        elevation: 5,
        width: '70%',
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    textInput: {
        borderBottomWidth: 1,
        width: '80%',
        margin: 10,
    },
    buttonContainer: {
        width: '80%',
        paddingVertical: 10,
    },
    errMsg: {
        marginVertical: 10,
    },
    errText: {
        color: 'red',
    },
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            login,
            signup,
        },
        dispatch,
    );
};

export default connect(null, mapDispatchToProps)(AuthScreen);
