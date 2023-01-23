import { NativeModules, Platform, NativeEventEmitter } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-newlib' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const Newlib = NativeModules.Newlib
  ? NativeModules.Newlib
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return Newlib.multiply(a, b);
}
export function locationUpdate(lat: number, long: number){
      //return Newlib.location(lat, long);
      console.log("LocationUpdate");
      Newlib.location(lat,long);
}
const eventEmitter = new NativeEventEmitter(NativeModules.Newlib);

eventEmitter.addListener('Sample Event', (event: any) => {
  console.log(event);
});
