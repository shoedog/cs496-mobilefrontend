/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            height: 30, 
            width: 100,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.5)",
          }}
          placeholder={'Username'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(username) => {this.setState({username})}}
          onSubmitEditing={() => {this.setState({username: ''})}}
          value={(this.state && this.state.username) || ''}
        />
        <TextInput
          style={{
            height: 30, 
            width: 100,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.5)",
          }}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(password) => {this.setState({password})}}
          onSubmitEditing={() => {this.setState({password: ''})}}
          value={(this.state && this.state.password) || ''}
        />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
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

AppRegistry.registerComponent('Project', () => Project);
