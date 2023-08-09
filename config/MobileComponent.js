import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MobileComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a Mobile Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default MobileComponent;
