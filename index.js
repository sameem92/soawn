/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import RNFetchBlob from 'react-native-fetch-blob'
const tempXMLHttpRequest = XMLHttpRequest;
window.tempXMLHttpRequest = tempXMLHttpRequest;

window.Blob = RNFetchBlob.polyfill.Blob;


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
