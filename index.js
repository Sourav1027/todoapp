// index.js
import { AppRegistry } from 'react-native';
import App from './App'; // Adjust path if needed
import { name as todoapp } from './app.json';

if (!AppRegistry) {
  console.error('AppRegistry is undefined!');
}

AppRegistry.registerComponent(todoapp, () => App);