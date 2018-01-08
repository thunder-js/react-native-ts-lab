import { makeHot, tryUpdateSelf, callOnce, clearCacheFor, redraw } from 'haul/hot';
import App from './App';
import { Navigation } from 'react-native-navigation'
import { BUNDLE_IDENTIFIER } from './resources/constants';

export const getScreenName = (bundleIdentifier, screenName) => `${bundleIdentifier}.${screenName}`

const registerScreen = (name) => {
  Navigation.registerComponent(getScreenName(BUNDLE_IDENTIFIER, name), makeHot(() => App, getScreenName(BUNDLE_IDENTIFIER, name)))
}

export const registerScreens = () => {
  registerScreen('App')
}

