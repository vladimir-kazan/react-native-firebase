import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import firebase from 'react-native-firebase';

class Main extends React.Component {

  static navigationOptions = {
    // headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => firebase.auth().signOut()}
        title="Logout"
      />
    ),
  };

  state = { currentUser: null };

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Text>Hello {currentUser && currentUser.email}!</Text>
        <Button title="Show FlatList" onPress={this.handleFlatList}/>
      </View>
    )
  }

  handleFlatList = () => {
    this.props.navigation.navigate('FlatList');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Main;
