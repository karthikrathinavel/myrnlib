
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNNewlibSpec.h"

@interface Newlib : NSObject <NativeNewlibSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Newlib : NSObject <RCTBridgeModule>
#endif

@end
