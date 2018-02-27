import React, { Component } from 'react';
import {
  Alert,
  ListView,
  Platform,
  ReactNative,
  StyleSheet,
  Text,
  View
} from 'react-native';
const firebase = require('firebase');
const ListItem = require('../../src/Components/ListItem');

export default class Details extends Component {

  componentWillMount() {
    console.log(this.props);
  }

  render() {
    const { screenProps } = this.props
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.props.screenProps.dataArray}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}/>
      </View>
    );
  }
  _renderItem(item) {

    const onPress = () => {
      Alert.alert(
        'Complete',
        null,
        [
          {text: 'Complete', onPress: (text) => console.log('Completed')},
          {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
        ]
      );
    };

    return (
      <ListItem item={item} onPress={onPress} />
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