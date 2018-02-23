/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  ReactNative,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Navigation from './src/Navigation/Navigation';
const firebase = require('firebase');

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBGSoyUO0wNCN9lLgOXLume5hiSRkxFdkY",
  authDomain: "expensetrack-devintope.firebaseapp.com",
  databaseURL: "https://expensetrack-devintope.firebaseio.com/",
  storageBucket: "",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  render() {
    return (
      <Navigation/>
    );
  }
}

const styles = StyleSheet.create({
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
