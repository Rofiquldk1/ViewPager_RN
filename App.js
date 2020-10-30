import React, {useState} from 'react';
// import all the components we are going to use
import {SafeAreaView,StyleSheet} from 'react-native';
import CustomStatusBar from './app/components/CustomStatusBar';
import BaseScreen2 from './app/components/BaseScreen2';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar />
      <BaseScreen2 />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default App;
