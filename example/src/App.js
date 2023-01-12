import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, NativeModules} from 'react-native';
import {requestUserPermission, NotificationServices} from './notif/utils/PushNotifications.js';
import Newlib from './CustomModule';
const App = () => {
  useEffect(()=>{
    requestUserPermission();
    NotificationServices();
  },[]);
  function callme(){
     Newlib.toast();
  }
  function locationUpdate(){
      var location = {
       latitude: 13.067439,
       longitude: 80.237617
      }
      Newlib.location(location.latitude, location.longitude);
    }
  function conversion(){
      var data = '{"name":"John", "age":30, "city":"New York"}';
      Newlib.appConversionTracking(data);
    }
  function addNewNotification(){
      var notificationTitle = "Sample Title";
      var notificationBody = "Sample Body";
      Newlib.addNewNotification(notificationTitle, notificationBody);
    }
    function delNotificationById(){
      var id = "1673501625026";
      Newlib.deleteNotificationByNID(id);
    }
    function getReadNotificationCount(){
      Newlib.getReadNotificationCount();
    }
    function customEvent1(){
      var resEvent = {
        eventName: 'Product Purchased',
        data: {
          productId: 'P234234',
          productName: 'Mobile Phone'
        }
      };
      NativeModules.ReReactNativeSDK.customEvent(JSON.stringify(resEvent));
    }
    function updatePushToken(){
      Newlib.updatePushToken();
    }
    function onTrackEvent(){
      Newlib.onTrackEvent();
    }
    function onDeviceUserRegister(){
      Newlib.onDeviceUserRegister();
    }
  return(
  <View>
    <TouchableOpacity onPress={locationUpdate} style={styles.countContainer}>
      <Text style={{color: '#fff'}}>locationUpdate</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={conversion} style={styles.countContainer}>
          <Text style={{color: '#fff'}}>appConversionTracking</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addNewNotification} style={styles.countContainer}>
          <Text style={{color: '#fff'}}>getNotification</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={delNotificationById} style={styles.countContainer}>
          <Text style={{color: '#fff'}}>DelNotificationbyid</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={getReadNotificationCount} style={styles.countContainer}>
          <Text style={{color: '#fff'}}>getReadNotificationCount</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={customEvent1} style={styles.countContainer}>
          <Text style={{color: '#fff'}}>customEvent</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={updatePushToken} style={styles.countContainer}>
          <Text style={{color: '#fff'}}>updatePushToken</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onTrackEvent} style={styles.countContainer}>
          <Text style={{color: '#fff'}}>onTrackEvent</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onTrackEvent} style={styles.countContainer}>
          <Text style={{color: '#fff'}}>onDeviceUserRegister</Text>
        </TouchableOpacity>
  </View>
  );
}
const styles = StyleSheet.create({
  countContainer: {
    alignItems: "center",
    padding: 10,
    margin: 20,
    backgroundColor: 'teal',
  }
});
export default App;
