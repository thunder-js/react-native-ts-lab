import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { Navigation } from 'react-native-navigation'

configure(() => {
  require ('./stories')
}, module);

const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: false });

export default class StorybookUIHMRRoot extends Component {
  render() {
    return <StorybookUIRoot />;
  }
}

Navigation.registerComponent('StorybookUI', () => StorybookUIHMRRoot);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'StorybookUI',
    title: 'StorybookUI'
  },
});


