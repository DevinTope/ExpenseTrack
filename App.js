/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  ListView,
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
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('expense');
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          name: child.val().name,
          date: child.val().date,
          price: child.val().price,
          type: child.val().type,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items),
        dataArray: items
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }
  render() {
    return (
      <Navigation screenProps={ {dataArray: this.state.dataSource, itemArray:this.state.dataArray} }/>
    );
  }
}

