import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import firebase from 'react-native-firebase';

import { h2, errorText, textInput } from '../Styles';

class Signup extends React.Component {
  state = { email: '', password: '', errorMessage: '' };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h2}>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={styles.errorText}>
            {this.state.errorMessage}
          </Text>
        }
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={this.onChangeEmail}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={this.onChangePassword}
          value={this.state.password}
        />
        <Button title="Sing Up" onPress={this.handleSignup} />
        <Button title="Already have an account? Login" onPress={this.handleLogin} />
      </View>
    );
  }

  onChangeEmail = (email) => {
    this.setState({ email });
  };

  onChangePassword = (password) => {
    this.setState({ password });
  };

  handleSignup = async () => {
    try {
      const result = await firebase.auth()
        .createUserAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password);
      console.log({ signupResult: result });
      this.props.navigation.navigate('App');
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
  };

  handleLogin = () => {
    this.props.navigation.navigate('Login');
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
});

export default Signup;
