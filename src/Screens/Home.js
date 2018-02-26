import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Button,
  Platform,
  ReactNative,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class Home extends Component {
  NewExpense = () =>
  {
     this.props.navigation.navigate('New');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home Screen
        </Text>
        <Button onPress = { this.NewExpense } title = 'Add a new expense'/>
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