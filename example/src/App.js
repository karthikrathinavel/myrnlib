//import React from 'react';
//import {Text, TouchableOpacity, ScrollView, StyleSheet, NativeModules, Button, DeviceEventEmitter} from 'react-native';
//import {requestUserPermission, NotificationServices} from './notif/utils/PushNotifications.js';
//import Newlib from './CustomModule';
//const App = () => {
//  const [name, setName] = useState('');
//  const [email, setEmail] = useState('');
//  useEffect(()=>{
//    requestUserPermission();
//    NotificationServices();
//    setTimeout(()=>{
//      Newlib.emitEvent();
//    },3000)
//  },[]);
//  DeviceEventEmitter.addListener('Sample Event', (data) => {
//      console.log(data);
//  });
//  function callme(){
//     Newlib.toast();
//  }
//  function locationUpdate(){
//      var location = {
//       latitude: 13.067439,
//       longitude: 80.237617
//      }
//      Newlib.location(location.latitude, location.longitude);
//    }
//  function conversion(){
//      var data = '{"name":"John", "age":30, "city":"New York"}';
//      Newlib.appConversionTracking(data);
//    }
//  function addNewNotification(){
//      var notificationTitle = "Sample Title";
//      var notificationBody = "Sample Body";
//      Newlib.addNewNotification(notificationTitle, notificationBody);
//    }
//    function delNotificationById(){
//      var id = "1673501625026";
//      Newlib.deleteNotificationByNID(id);
//    }
//    function getReadNotificationCount(){
//      Newlib.getReadNotificationCount();
//    }
//    function customEvent1(){
//      var resEvent = {
//        eventName: 'Product Purchased',
//        data: {
//          productId: 'P234234',
//          productName: 'Mobile Phone'
//        }
//      };
//      NativeModules.ReReactNativeSDK.customEvent(JSON.stringify(resEvent));
//    }
//    function updatePushToken(){
//      Newlib.updatePushToken();
//    }
//    function onTrackEvent(){
//      Newlib.onTrackEvent();
//    }
//    function onDeviceUserRegister(){
//      var uid = "1", name = "karthik", age = "22", email = "email@email.com", phone = "1234567890", gender = "M", token = "ddkO8qkqSty2R3shWWXjaX:APA91bFWIrDtEREcVcz_TJpMbgI4a4tj3yvAOgS6-hSC-zlrThjJohnyYIkMC_Y6xyREV0kmOabrMK3EZklPkQSvYqDVOl5ZNoc33huEEhmL7Anwqs7zuIHWpjYl11sCAbJT6zDiASFA";
//      var profileUrl = "https://github.com/karthikrathinavel", dob = "26/01/2001", education = "B.E";
//      var employed = false, married = false;
//      let jsonData = {
//        "uid": "1",
//        "name": "karthik",
//        "age": "22",
//        "email": "email2@email.com",
//        "phone": "1234567890",
//        "gender": "M",
//        "profileURL": "https://github.com/karthikrathinavel",
//        "dob": "26/01/2001",
//        "education": "B.E",
//        "employed": false,
//        "married": false
//      }
//      let jsonString = JSON.stringify(jsonData);
//      Newlib.onDeviceUserRegister(jsonString);
//    }
//    function readNotification(){
//      Newlib.readNotification();
//    }
//    function unReadNotification(){
//      Newlib.unReadNotification();
//    }
//    function getDeepLinkData(){
//      Newlib.getDeepLinkData();
//    }
//    function formDataCapture(){
//      let jsonData = {
//          "name": "John",
//          "age": 30,
//          "city": "New York"
//      };
//      let jsonString = JSON.stringify(jsonData);
//      Newlib.formDataCapture(jsonString);
//    }
//    function emitEvent(){
//      Newlib.emitEvent();
//    }
//  return(
//  <ScrollView>
//    <TouchableOpacity onPress={locationUpdate} style={styles.countContainer}>
//      <Text style={{color: '#fff'}}>locationUpdate</Text>
//    </TouchableOpacity>
//    <TouchableOpacity onPress={conversion} style={styles.countContainer}>
//          <Text style={{color: '#fff'}}>appConversionTracking</Text>
//        </TouchableOpacity>
//        <TouchableOpacity onPress={addNewNotification} style={styles.countContainer}>
//          <Text style={{color: '#fff'}}>getNotification</Text>
//        </TouchableOpacity>
//        <TouchableOpacity onPress={delNotificationById} style={styles.countContainer}>
//          <Text style={{color: '#fff'}}>DelNotificationbyid</Text>
//          </TouchableOpacity>
//        <TouchableOpacity onPress={getReadNotificationCount} style={styles.countContainer}>
//          <Text style={{color: '#fff'}}>getReadNotificationCount</Text>
//        </TouchableOpacity>
//        <TouchableOpacity onPress={customEvent1} style={styles.countContainer}>
//          <Text style={{color: '#fff'}}>customEvent</Text>
//        </TouchableOpacity>
//        <TouchableOpacity onPress={updatePushToken} style={styles.countContainer}>
//          <Text style={{color: '#fff'}}>updatePushToken</Text>
//        </TouchableOpacity>
//        <TouchableOpacity onPress={onTrackEvent} style={styles.countContainer}>
//          <Text style={{color: '#fff'}}>onTrackEvent</Text>
//        </TouchableOpacity>
//        <TouchableOpacity onPress={onDeviceUserRegister} style={styles.countContainer}>
//          <Text style={{color: '#fff'}}>onDeviceUserRegister</Text>
//        </TouchableOpacity>
//        <TouchableOpacity onPress={readNotification} style={styles.countContainer}>
//          <Text style={{color: '#fff'}}>readNotification</Text>
//        </TouchableOpacity>
//        <TouchableOpacity onPress={unReadNotification} style={styles.countContainer}>
//          <Text style={{color: '#fff'}}>unReadNotification</Text>
//        </TouchableOpacity>
//        <TouchableOpacity onPress={getDeepLinkData} style={styles.countContainer}>
//          <Text style={{color: '#fff'}}>getDeepLinkData</Text>
//        </TouchableOpacity>
//        <TouchableOpacity onPress={formDataCapture} style={styles.countContainer}>
//          <Text style={{color: '#fff'}}>formDataCapture</Text>
//        </TouchableOpacity>
//        <TouchableOpacity onPress={emitEvent} style={styles.countContainer}>
//                  <Text style={{color: '#fff'}}>EmitEvent</Text>
//                </TouchableOpacity>
//  </ScrollView>
//  );
//}
//const styles = StyleSheet.create({
//  countContainer: {
//    alignItems: "center",
//    padding: 10,
//    margin: 5,
//    backgroundColor: 'rgba(0,0,0,0.2)',
//  }
//});
//export default App;
