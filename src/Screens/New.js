import React, { Component } from 'react';
import {
  Button,
  Platform,
  ReactNative,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class New extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          New
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