import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import Navigation from './navigation/Navigation';
import WebComponent from './config/WebComponent'; // Ubah sesuai dengan path ke komponen web
import MobileComponent from './config/MobileComponent'; // Ubah sesuai dengan path ke komponen mobile

const App = () => {
  return (
    <View style={styles.container}>
      {Platform.OS === 'web' ? <WebComponent /> : (Platform.OS === 'ios' || Platform.OS === 'android' ? <Navigation /> : <MobileComponent />)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
