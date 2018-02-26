/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  ReactNative,
  Text,
  View
} from 'react-native';
import Navigation from './src/Navigation/Navigation';
const firebase = require('firebase');
const styles = require('./styles.js');

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