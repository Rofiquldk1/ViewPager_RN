import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Button,StyleSheet} from 'react-native';
import DateTimePicker2 from '@react-native-community/datetimepicker';
import HorizontalLine from '../components/HorizontalLine.js';

var day,month,year;

const Date2Fragment = ({callback}) => {
  var mDate = new Date();
  const [date, setPickedDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setPickedDate(currentDate);
    callback(2,currentDate);

    day = date.toString().substr(8,2);
    month = date.toString().substr(4,3);
    year = date.toString().substr(11,4);
    
  };  

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  
  const update_ui = (d2) => {
    mDate = new Date(d2);
    mDate.setDate(mDate.getDate());

    day = mDate.toString().substr(8,2);
    month = mDate.toString().substr(4,3);
    year = mDate.toString().substr(11,4);
  }

  function viewDate() {       
    return (
      <View>
        <Text style={styles.dateShow}>
          {day}/{month}/{year}
        </Text>
        {show && (
        <DateTimePicker2
          testID="dateTimePicker2"
          value={mDate}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      </View>
      ); 
   }

    return (
      <View  style={styles.background1}>
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
          প্রসবের সম্ভাব্য তারিখ
        </Text>
        {viewDate()}
        </View>
      )
  
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


export default Date2Fragment;