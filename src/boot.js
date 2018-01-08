import { makeHot, tryUpdateSelf, callOnce, clearCacheFor, redraw } from 'haul/hot';
import { Navigation } from 'react-native-navigation'
import { BUNDLE_IDENTIFIER } from './resources/constants';
import { registerScreens, getScreenName } from './screens';

const startApp = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        screen: getScreenName(BUNDLE_IDENTIFIER, 'App'), // this is a registered name for a screen
        title: 'Screen One'
      }
    ]
  });
}

registerScreens()
startApp()

if (module.hot) {
  module.hot.accept(() => {})
  module.hot.accept('./App', () => {
    clearCacheFor(require.resolve('./App'));
    redraw(() => require('./App').default, getScreenName(BUNDLE_IDENTIFIER, 'App'));
  });  
}