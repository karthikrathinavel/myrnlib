package com.newlib;

import android.content.Context;
import android.widget.Toast;

import androidx.annotation.NonNull;

import org.json.JSONException;
import org.json.JSONObject;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import io.mob.resu.reandroidsdk.ReAndroidSDK;
import io.mob.resu.reandroidsdk.ReReactNativeSDKPackage;
@ReactModule(name = NewlibModule.NAME)
public class NewlibModule extends ReactContextBaseJavaModule {
  public static final String NAME = "Newlib";
  public Context context = null;
  public NewlibModule(ReactApplicationContext reactContext) {

    super(reactContext);
    context = (Context) reactContext;
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

}
