import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import codePush from 'react-native-code-push'
import { Navigator } from 'detox'

export class App extends React.Component<{}, { hello: boolean }> {
  state = {
    hello: false
  }

  private handlePress = () => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    })
  }

  private handleNextScreen = () => {
    this.setState({
      hello: true
    })
  }
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} testID="welcomeText">
          A simple update 0.0.11
        </Text>
        <Button
          onPress={this.handlePress}
          title="UPDATE hehe"
        />
        <Button
          onPress={this.handleNextScreen}
          title="Next screen"
          testID="helloButton"
        />
        {this.state.hello &&
          <Text style={styles.welcome} testID="helloText">
            Hello !
          </Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
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

export default codePush({ checkFrequency: codePush.CheckFrequency.ON_APP_START })(App);