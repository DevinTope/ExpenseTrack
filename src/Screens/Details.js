import React, { Component } from 'react';
import {
  Platform,
  ReactNative,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Details extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Details Screen
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});