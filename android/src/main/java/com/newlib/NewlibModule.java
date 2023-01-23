package com.newlib;



import android.content.Context;
import android.media.AudioMetadata;
import android.widget.Toast;
import org.json.JSONObject;
import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactContext;

import org.json.JSONException;
import org.json.JSONObject;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import java.util.ArrayList;

import io.mob.resu.reandroidsdk.IDeepLinkInterface;
import io.mob.resu.reandroidsdk.MRegisterUser;
import io.mob.resu.reandroidsdk.RNotification;
import io.mob.resu.reandroidsdk.ReAndroidSDK;
import io.mob.resu.reandroidsdk.ReReactNativeSDKPackage;

import com.facebook.react.modules.core.DeviceEventManagerModule;

@ReactModule(name = NewlibModule.NAME)
public class NewlibModule extends ReactContextBaseJavaModule {
  public static final String NAME = "Newlib";
  private final ReactApplicationContext reactContext;
  public Context context = null;
  public NewlibModule(ReactApplicationContext reactContext) {

//    super(reactContext);
//    context = (Context) reactContext;
    this.reactContext = reactContext;
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void multiply(double a, double b, Promise promise) {
    promise.resolve(a * b);
  }

  @ReactMethod
  public void toast(){
    System.out.println("Method called");
  }

  @ReactMethod
  public void location(double latitude, double longitude){
    ReAndroidSDK.getInstance(context).onLocationUpdate(latitude, longitude);
    System.out.println("onLocationUpdate");
    //emitEvent();
  }

  @ReactMethod
  public void appConversionTracking() throws JSONException {
    String jsonString = "{\"name\":\"John\",\"age\":30,\"city\":\"New York\"}";
    org.json.JSONObject jsonObject = new org.json.JSONObject(jsonString);
    ReAndroidSDK.getInstance(context).appConversionTracking(jsonObject);
    System.out.println("appConversionTracking");
  }

  @ReactMethod
  public void addNewNotification(String title, String body){
    ReAndroidSDK.getInstance(context).addNewNotification(title, body, "MainActivity");
    System.out.println("addNewNotification");
  }

  @ReactMethod
  public void deleteNotificationByNID(String id){
    ReAndroidSDK.getInstance(context).deleteNotificationByNotificationId(id);
    System.out.println("deleteNotificationByNotificationId");
  }

  @ReactMethod
  public void getReadNotificationCount(){
    int readedCount = ReAndroidSDK.getInstance(context).getUnReadNotificationCount();
    System.err.println("Notification readed count: " + readedCount);
  }

  @ReactMethod
  public void updatePushToken(){
    ReAndroidSDK.getInstance(context).updatePushToken("dtTnzpnaT0a2hyt2DaxmZ_:APA91bG2rTDqkloet7NIWG_RMpyhfSJe06ylW3RelzbUOe75zHPlkaYnApjNJnWmMvHhZ5ipqWU2XkdqtIk9swYKbvN7Au4v_DzN2wSO-7HJ2-4f3UHtSPklaL8O86AtR_4nxGuMAIeb");
  }

  @ReactMethod
  public void onTrackEvent(){
    ReAndroidSDK.getInstance(context).onTrackEvent("SampleEvent");
  }

//  @ReactMethod
//  public void onDeviceUserRegister(String uid, String name, String age, String email, String phone, String gender, String token, String profileUrl, String dob, String education, boolean employed, boolean married){
//    MRegisterUser obj = new MRegisterUser();
//    obj.setAdId(uid);
//    obj.setName(name);
//    obj.setAge(age);
//    obj.setEmail(email);
//    obj.setPhone(phone);
//    obj.setGender(gender);
//    obj.setDeviceToken(token);
//    obj.setProfileUrl(profileUrl);
//    obj.setDob(dob);
//    obj.setEducation(education);
//    obj.setEmployed(employed);
//    obj.setMarried(married);
//    ReAndroidSDK.getInstance(context).onDeviceUserRegister(obj);
//  }

  @ReactMethod
  public void onDeviceUserRegister(String json) throws JSONException{
    JSONObject json1 = new JSONObject(json);
    System.out.println(json1);
    MRegisterUser obj = new MRegisterUser();
    obj.setAdId(json1.getString("uid"));
    obj.setName(json1.getString("name"));
    obj.setAge(json1.getString("age"));
    obj.setEmail(json1.getString("email"));
    obj.setPhone(json1.getString("phone"));
    obj.setGender(json1.getString("gender"));
    //obj.setDeviceToken(token);
    obj.setProfileUrl(json1.getString("profileURL"));
    obj.setDob(json1.getString("dob"));
    obj.setEducation(json1.getString("education"));
    obj.setEmployed(json1.getBoolean("employed"));
    obj.setMarried(json1.getBoolean("married"));
    ReAndroidSDK.getInstance(context).onDeviceUserRegister(obj);
  }

  @ReactMethod
  public void formDataCapture(String json) throws JSONException {
      JSONObject json1 = new JSONObject(json);
//    json1.put("firstName", "John");
//    json1.put("lastName", "Smith");
//    json1.put("age", 25);
    ReAndroidSDK.getInstance(context).formDataCapture(json1);
  }

    @ReactMethod
    public void readNotification(){
      ReAndroidSDK.getInstance(context).readNotification("1673591227344");
    }

  @ReactMethod
  public void unReadNotification(){
    ReAndroidSDK.getInstance(context).unReadNotification("1673591227344");
  }

  @ReactMethod
  public void getDeepLinkData(){
    String deepLinkData = ReAndroidSDK.getInstance(context).getDeepLinkData();
    System.out.println(deepLinkData);
  }

  @ReactMethod
  public void emitEvent() {
    String data = "Data";
    reactContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
      .emit("Sample Event", data);
  }

}
