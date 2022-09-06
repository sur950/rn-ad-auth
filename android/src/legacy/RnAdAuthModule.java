package com.rnadauth;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class RnAdAuthModule extends ReactContextBaseJavaModule {
  public static final String NAME = RnAdAuthModuleImpl.NAME;

  RnAdAuthModule(ReactApplicationContext context) {
    super(context);
  }

  @Override
  @NonNull
  public String getName() {
    return RnAdAuthModuleImpl.NAME;
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void multiply(double a, double b, Promise promise) {
    RnAdAuthModuleImpl.multiply(a, b, promise);
  }
}
