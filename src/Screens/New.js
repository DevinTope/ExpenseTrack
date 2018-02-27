import React, { Component } from 'react';
import {
  Button,
  Platform,
  ReactNative,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import moment from 'moment';
var t = require('tcomb-form-native');

class New extends Component {
    onChange = (value) =>{
        this.setState({value});
    }
    
    onPress = () => {
        var value = this.refs.form.getValue();
        if (value) {
            this.props.screenProps.owner.itemsRef.push( { 
                name: value.name,
                type: value.type,
                price: value.price,
                date: value.date.toString()
            } );
            console.log("Successful expense insertion");
        }
    }
    
    render() {
        const { screenProps } = this.props

        var Form = t.form.Form;

        var Types = t.enums({
            food: 'Food',
            trans: 'Transportation',
            personal: 'Personal',
            other: 'Other'
        });

        let myFormatFunction = (format,date) =>{
            return moment(date).format(format);
        }
        var effectiveDate = {
            label: 'When did you buy it?',
            mode:'date',
            config:{
                format:(date) => myFormatFunction("DD MMM YYYY",date)
            },
            maximumDate: moment(new Date()).toDate(),
            error: 'Cannot be in the future'
        };

        var options = {
            fields: {
                name: {
                    label: 'What did you buy?'
                },
                type: {
                    label: 'What is it?'
                },
                price: {
                    label: 'How much was it?',
                    error: 'Enter a valid price'
                },
                date: effectiveDate
            }
        };

        var Expense = t.struct({
            name: t.String,
            type: Types,
            price: t.Number,
            date: t.Date
        });   

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    New Expense
                </Text>
                <Form ref="form"
                    type={Expense}
                    options={options}
                    value={moment(new Date()).toDate()}/>
                <Button style={styles.submitButton} onPress={this.onPress} underlayColor='#99d9f4' title="Submit"/>
            </View>
        );
    }
}

export default New;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
     margin: 10,
     height: 60,
     borderColor: '#000',
     borderWidth: 1
  },
  submitButton: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});