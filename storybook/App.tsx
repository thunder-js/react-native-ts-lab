import * as React from 'react'
import { getStorybookUI } from '@storybook/react-native';

const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: false });

export default class App extends React.Component {
  render() {
    return <StorybookUIRoot />;
  }
}