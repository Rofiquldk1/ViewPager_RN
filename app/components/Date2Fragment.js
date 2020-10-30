import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Button,StyleSheet} from 'react-native';
import DateTimePicker2 from '@react-native-community/datetimepicker';
import HorizontalLine from './HorizontalLine.js';

var date1,day,month,year;
var day2,month2,year2;
var check=0;

const Date2Fragment = ({mydate}) => {
  var mDate = new Date(mydate);
  mDate.setDate(mDate.getDate() + 280);

  day = mDate.toString().substr(8,2);
  month = mDate.toString().substr(4,3);
  year = mDate.toString().substr(11,4);
  
  const [date, setPickedDate] = useState(mDate);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState(0);
  const [dateChanged, setDateChanged] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setPickedDate(currentDate);
    setCheck(1);
    setDateChanged(true);
  };  

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  
  function viewDate() {    
    day2 = date.toString().substr(8,2);
    month2 = date.toString().substr(4,3);
    year2 = date.toString().substr(11,4);
    
    return (
      <View>
        <Text style={styles.dateShow}>
          {day2}/{month2}/{year2}
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