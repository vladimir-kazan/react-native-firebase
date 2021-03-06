import React from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import firebase from 'react-native-firebase';

import { h2, errorText, textInput } from '../Styles';

class Login extends React.Component {
  state = { email: 'user@example.com', password: '', errorMessage: '' };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h2}>Login</Text>
        {this.state.errorMessage &&
          <Text style={styles.errorText}>
            {this.state.errorMessage}
          </Text>
        }
        <Text style={styles.gray}>
          user@example.com/Admin=1
        </Text>
        <TextInput
          autoFocus={true}
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={this.onChangeEmail}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={this.onChangePassword}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button title="Don't have an account? Sign Up" onPress={this.handleSingup} />
      </View>
    );
  }

  onChangeEmail = (email) => {
    this.setState({ email });
  };

  onChangePassword = (password) => {
    this.setState({ password });
  };

  handleLogin = async () => {
    try {
      const { email, password } = this.state;
      const result = await firebase
        .auth()
        .signInAndRetrieveDataWithEmailAndPassword(email, password);
      await AsyncStorage.setItem('userEmail', email);
      console.log({ loginResult: result });
      this.props.navigation.navigate('Main');
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
  };

  handleSingup = async () => {
    const { email } = this.state;
    await AsyncStorage.setItem('userEmail', email);
    this.props.navigation.navigate('Signup');
  };
}

const styles = StyleSheet.create({
  h2,
  errorText,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: { ...textInput, ...{
    width: '90%',
  }},
  gray: {
    color: '#ccc',
  }
});

export default Login;
