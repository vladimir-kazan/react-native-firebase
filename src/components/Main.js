import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Main extends React.Component {
  state = { currentUser: null };

  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Text>Hello {currentUser && currentUser.email}!</Text>
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

export default Main;