declare var module: any;

import { makeHot, tryUpdateSelf, callOnce, clearCacheFor, redraw } from 'haul/hot';
import { Navigation } from 'react-native-navigation'
import { configure } from '@storybook/react-native';
import App from './App';

configure(() => {
  require ('./stories')
}, module);

Navigation.registerComponent('StorybookUI', () => App);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'StorybookUI',
    title: 'StorybookUI'
  },
});

if (module.hot) {
  module.hot.accept(() => {})
  module.hot.accept('./App', () => {
    clearCacheFor(require.resolve('./App'));
    redraw(() => require('./App').default, 'com.thunder.tslab.App');
  });  
}