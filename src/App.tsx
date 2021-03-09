import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.highlight}>Welcome to React Native Web</Text>
        <Text>Write once run everywhere</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlight: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default App;
