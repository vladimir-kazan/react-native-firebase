import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { h2 } from '../Styles';

class FlatList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h2}>Under construction</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h2,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FlatList;
