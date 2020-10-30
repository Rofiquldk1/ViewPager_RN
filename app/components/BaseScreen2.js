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
import Date2Fragment, {getDate1} from './Date2Fragment.js';

const BaseScreen2 = () => {
  var d1 = new Date();
  var d2 = new Date();
  const [date1, setDate1] = useState(d1);
  const [date2, setDate2] = useState(d2);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChangeDate1 = (event, selectedDate) => {
    const currentDate = selectedDate || date1;
    setShow(Platform.OS === 'ios'); 
    setDate1(currentDate);
    setDate2(currentDate)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  function myDate() {
    return new Date(date2.setDate(date2.getDate() + 280))
  }

  return (
    <IndicatorViewPager
      style={styles.pagerStyle}
      indicator={<PagerDotIndicator pageCount={4} />}>
      <View>
        <ShagotomFragment />
      </View>
      <View style={styles.background1}>
        <Text style={{marginBottom: 15, color: 'white', fontSize: 16}}>
          তারিখ বদলাতে এখানে চাপুন
        </Text>
        <TouchableOpacity onPress={showDatepicker}>
          <Image
            style={[styles.datePickerLogo, {marginBottom: 35}]}
            source={require('../images/icons8-planner-100.png')}
          />
        </TouchableOpacity>
        <HorizontalLine />
        <Text
          style={{
            marginBottom: 15,
            fontWeight: 'bold',
            fontSize: 30,
            color: 'white',
          }}>
          শেষ মাসিক এর প্রথম দিন
        </Text>
        <Text
          style={{
            marginBottom: 15,
            fontSize: 25,
            color: 'white',
          }}>
          {date1.toString().substr(4, 6)}, {date1.toString().substr(11, 4)}
        </Text>

        {show && (
          <DateTimePicker1
            testID="dateTimePicker1"
            value={date1}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChangeDate1}
          />
        )}
      </View>
      <Date2Fragment mydate={date1}  />
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