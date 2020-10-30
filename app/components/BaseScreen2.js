import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity,StyleSheet} from 'react-native';
import {
  IndicatorViewPager,
  PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';

import ShagotomFragment from '../fragment/ShagotomFragment.js';
import EkNojoreFragment from '../fragment/EkNojoreFragment.js';
import HorizontalLine from './HorizontalLine.js';
import DateTimePicker1 from '@react-native-community/datetimepicker';
import Date2Fragment, {getDate1} from '../fragment/Date2Fragment.js';
import Date1Fragment from '../fragment/Date1Fragment.js';

const BaseScreen2 = () => {
  var d1 = new Date();
  var d2 = new Date();
  d2.setDate(d1.getDate() + 280);
  
  const callback = (index,date) => {
      console.log("callback from "+index,date);
      if(index === 1) {
         d1 = new Date(date);
         d2 = new Date();
         d2.setDate(d1.getDate() + 280);
      }
      else if(index === 2) {
        d2=new Date(date);
      }
      console.log(d1,d2);
   }
 
    //setInterval(() => {
    //  console.log(d1,d2);
    //},2000);

    const onPageSelected = (e) => {
      //console.log('state is: '+ e.position)
      console.log(d1,d2);
      if(e.position === 2){
         //Date2Fragment.update_ui(d2);
      }

    }


  return (
    <IndicatorViewPager 
      style={styles.pagerStyle}
      indicator={<PagerDotIndicator pageCount={4} />
      }
      onPageSelected={onPageSelected}
      >
      <View>
        <ShagotomFragment />
      </View>
      <View style={{flex: 1}}>
        <Date1Fragment callback={callback} />
      </View>
      <View style={{flex: 1}}>
        <Date2Fragment  callback={callback} />
      </View>
      <View>
        <EkNojoreFragment />
      </View>
    </IndicatorViewPager>
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
  
export default BaseScreen2;