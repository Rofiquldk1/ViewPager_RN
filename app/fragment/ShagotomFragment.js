import React from 'react';
import { View, Image, Text,StyleSheet } from 'react-native';

const ShagotomFragment = () => {
    return (
        <View style={styles.background1}>
          <Image
            style={styles.animatedImage}
            source={require('../images/mother1.png')}
          />
          <Text style={styles.pagerText}>স্বাগতম!!</Text>
        </View>
    );
}

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


export default ShagotomFragment;