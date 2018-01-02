import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import codePush from 'react-native-code-push'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component<{}> {
  private handlePress = () => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    })
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          A simple update 0.0.9
        </Text>
        <Button
          onPress={this.handlePress}
          title="UPDATE hehe"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
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

export default codePush({ checkFrequency: codePush.CheckFrequency.MANUAL })(App);