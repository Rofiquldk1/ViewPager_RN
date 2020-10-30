import React from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';
import HorizontalLine from '../components/HorizontalLine.js'

const EkNojoreFragment = () => {
  return (
    <View style={styles.background1}>
        <Image
          style={[styles.datePickerLogo, {marginBottom: 35}]}
          // source={require('/home/forhad/ReactNative/MaApp_RN/oApp/assets/images/icons8-doctors-bag-100.png')}
          source={require('../images/icons8-planner-100.png')}
        />
      <HorizontalLine />
      <Text
        style={{
          marginBottom: 15,
          fontWeight: 'bold',
          fontSize: 30,
          color: 'white',
        }}>
        এক নজরে 
      </Text>
      <Text>

      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch',
  },
  pagerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  animatedImage: {
    width: 250,
    height: 250,
    marginBottom: 25,
    tintColor: 'white',
  },
  container: {
    flex: 1,
  },
  dateShow: {
    marginBottom: 15,
    fontSize: 25,
    color: 'white',
  },
  datePickerLogo:{
    width: 70,
    height: 70,
    tintColor: 'white',
  },
  background1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:  '#ab1454',
  },
  background2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ab1454',
  },
  background3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ab1454',
  },
  background4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ab1454',
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
  },
  pagerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageButton: {
    width: 50,
    height: 50,
    tintColor: 'white',
  },
});


export default EkNojoreFragment;
