
import { AppRegistry } from 'react-native';
import App from './App'; // Ubah sesuai dengan path ke komponen utama Anda
import { name as appName } from './app.json';

// Register the app for both mobile and web
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, { rootTag: document.getElementById('app-root') });
