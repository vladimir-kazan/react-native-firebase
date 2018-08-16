import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

class Loading extends React.Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged(this.onAuthChanged.bind(this));
  }

  onAuthChanged(user) {
    console.log(this, user);
    const { navigation } = this.props;
    const destination = user ? 'App' : 'Login';
    navigation.navigate(destination);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Loading;
