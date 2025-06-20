import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FireAuth = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Firebase Auth Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default FireAuth;
