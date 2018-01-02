import { makeHot, tryUpdateSelf, callOnce, clearCacheFor, redraw } from 'haul/hot';
// import codePush from 'react-native-code-push';
import App from './App';
import { Navigation } from 'react-native-navigation'

Navigation.registerComponent('com.thunder.tslab.App', makeHot(() => App, 'com.thunder.tslab.App'))

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'com.thunder.tslab.App', // this is a registered name for a screen
      title: 'Screen One'
    }
  ]
});

if (module.hot) {
  module.hot.accept(() => {})
  module.hot.accept('./App', () => {
    clearCacheFor(require.resolve('./App'));
    redraw(() => require('./App').default, 'com.thunder.tslab.App');
  });  
}
