//
//  PrintColumnBleWriteDelegate.h
//  RNBluetoothEscposPrinter
//
 
#import <React/RCTBridgeModule.h>
#import "RNBluetoothManager.h"
#import "RNBluetoothEscposPrinter.h"

@interface PrintColumnBleWriteDelegate:NSObject<WriteDataToBleDelegate>
@property NSInteger now;
@property Boolean error;
@property RCTPromiseResolveBlock pendingResolve;
@property RCTPromiseRejectBlock pendingReject;
@property RNBluetoothEscposPrinter *printer;
@property Boolean canceled;
@property NSString *encodig;
@property NSInteger codePage;
@property NSInteger widthTimes;
@property NSInteger heightTimes;
@property NSInteger fontType;
-(void)printColumn:(NSMutableArray<NSMutableString *> *) columnsToPrint withMaxcount:(NSInteger)maxcount;
@end
