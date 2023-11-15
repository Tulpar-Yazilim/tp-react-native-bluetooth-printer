declare module "tp-react-native-bluetooth-printer" {
  export enum DIRECTION {
    FORWARD = 0,
    BACKWARD = 1,
  }
  export enum DENSITY {
    DNESITY0 = 0,
    DNESITY1 = 1,
    DNESITY2 = 2,
    DNESITY3 = 3,
    DNESITY4 = 4,
    DNESITY5 = 5,
    DNESITY6 = 6,
    DNESITY7 = 7,
    DNESITY8 = 8,
    DNESITY9 = 9,
    DNESITY10 = 10,
    DNESITY11 = 11,
    DNESITY12 = 12,
    DNESITY13 = 13,
    DNESITY14 = 14,
    DNESITY15 = 15,
  }
  export enum TSC_BARCODETYPE {
    BARCODE128 = "128",
    BARCODE128M = "128M",
    EAN128 = "EAN128",
    ITF25 = "25",
    ITF25C = "25C",
    BARCODE39 = "39",
    BARCODE39C = "39C",
    BARCODE39S = "39S",
    BARCODE93 = "93",
    EAN13 = "EAN13",
    EAN13_2 = "EAN13+2",
    EAN13_5 = "EAN13+5",
    EAN8 = "EAN8",
    EAN8_2 = "EAN8+2",
    EAN8_5 = "EAN8+5",
    BARCODABAR = "CODA",
    POST = "POST",
    UPCA = "EAN13",
    UPCA_2 = "EAN13+2",
    UPCA_5 = "EAN13+5",
    UPCE = "EAN13",
    UPCE_2 = "EAN13+2",
    UPCE_5 = "EAN13+5",
    CPOST = "CPOST",
    MSI = "MSI",
    MSIC = "MSIC",
    PLESSEY = "PLESSEY",
    ITF14 = "ITF14",
    EAN14 = "EAN14",
  }
  export enum FONTTYPE {
    FONT_1 = "1",
    FONT_2 = "2",
    FONT_3 = "3",
    FONT_4 = "4",
    FONT_5 = "5",
    FONT_6 = "6",
    FONT_7 = "7",
    FONT_8 = "8",
    SIMPLIFIED_CHINESE = "TSS24.BF2",
    TRADITIONAL_CHINESE = "TST24.BF2",
    KOREAN = "K",
  }
  export enum EEC {
    LEVEL_L = "L",
    LEVEL_M = "M",
    LEVEL_Q = "Q",
    LEVEL_H = "H",
  }
  export enum TSC_ROTATION {
    ROTATION_0 = 0,
    ROTATION_90 = 90,
    ROTATION_180 = 180,
    ROTATION_270 = 270,
  }
  export enum FONTMUL {
    MUL_1 = 1,
    MUL_2 = 2,
    MUL_3 = 3,
    MUL_4 = 4,
    MUL_5 = 5,
    MUL_6 = 6,
    MUL_7 = 7,
    MUL_8 = 8,
    MUL_9 = 9,
    MUL_10 = 10,
  }
  export enum BITMAP_MODE {
    OVERWRITE = 0,
    OR = 1,
    XOR = 2,
  }
  export enum PRINT_SPEED {
    SPEED1DIV5 = 1,
    SPEED2 = 2,
    SPEED3 = 3,
    SPEED4 = 4,
  }
  export enum TEAR {
    ON = "ON",
    OFF = "OFF",
  }
  export enum READABLE {
    DISABLE = 0,
    ENABLE = 1,
  }
  export enum ERROR_CORRECTION {
    L = 1,
    M = 0,
    Q = 3,
    H = 2,
  }
  export enum BARCODETYPE {
    UPC_A = 65, //11<=n<=12
    UPC_E = 66, //11<=n<=12
    JAN13 = 67, //12<=n<=12
    JAN8 = 68, //7<=n<=8
    CODE39 = 69, //1<=n<=255
    ITF = 70, //1<=n<=255(even numbers)
    CODABAR = 71, //1<=n<=255
    CODE93 = 72, //1<=n<=255
    CODE128 = 73, //2<=n<=255
  }
  export enum ESC_ROTATION {
    OFF = 0,
    ON = 1,
  }
  export enum ALIGN {
    LEFT = 0,
    CENTER = 1,
    RIGHT = 2,
  }
  export enum PAGE_WIDTH {
    WIDTH_58 = 384,
    WIDTH_80 = 576,
  }
  export enum MODE {
    DISABLE = 0,
    ENABLE = 1,
  }

  export type BluetoothDevice = {
    name: string;
    address: string;
  };

  export type ScannedBluetoothDevices = {
    paired: BluetoothDevice[];
    found: BluetoothDevice[];
  };

  export type PrintTextOptions = {
    encoding?: string;
    codepage?: number;
    widthtimes?: number;
    heigthtimes?: number;
    fonttype?: number;
  };

  export type PrintPictureOptions = {
    width?: number;
    height?: number;
    left?: number;
  };

  export type PrintLabelOptions = {
    width: number;
    height: number;
    gap?: number;
    speed?: number | typeof PRINT_SPEED;
    tear?: string | typeof TEAR;
    text?: any[];
    qrcode?: any[];
    barcode?: any[];
    image?: any[];
    reverse?: any[];
    direction?: number | typeof DIRECTION;
    density?: number | typeof DENSITY;
    reference?: any[];
    sound?: number | typeof READABLE;
    home?: number | typeof READABLE;
  };

  export class BluetoothManager {
    static enableBluetooth():
      | void
      | PromiseLike<void>
      | PromiseLike<BluetoothDevice[]>;
    static disableBluetooth(): boolean | PromiseLike<boolean>;
    static isBluetoothEnabled(): boolean | PromiseLike<boolean>;
    static scanDevices():
      | ScannedBluetoothDevices
      | PromiseLike<ScannedBluetoothDevices>;
    static connect(address: string): void | PromiseLike<void>;
    static getConnectedDevice():
      | BluetoothDevice[]
      | PromiseLike<BluetoothDevice[]>;
    static unpair(address: string): string | PromiseLike<string>;
  }

  export class BluetoothEscposPrinter {
    static printerInit():
      | void
      | string
      | PromiseLike<void>
      | PromiseLike<string>;
    static printAndFeed(
      feed: number
    ): void | string | PromiseLike<void> | PromiseLike<string>;
    static printerLeftSpace(
      space: number
    ): void | string | PromiseLike<void> | PromiseLike<string>;
    static printerLineSpace(
      space: number
    ): void | string | PromiseLike<void> | PromiseLike<string>;
    static printerUnderLine(
      line: number | typeof READABLE
    ): void | string | PromiseLike<void> | PromiseLike<string>;
    static printerAlign(
      space: number | typeof ALIGN
    ): void | string | PromiseLike<void> | PromiseLike<string>;
    static printText(
      text: string,
      options?: PrintTextOptions
    ): void | string | PromiseLike<void> | PromiseLike<string>;
    static printColumn(
      columnWidths: number[],
      columnAligns: number[] | (typeof ALIGN)[],
      columnTexts: string[],
      options?: PrintTextOptions
    ): void | string | PromiseLike<void> | PromiseLike<string>;
    static setWidth(
      width: number | typeof PAGE_WIDTH
    ): void | PromiseLike<void>;
    static printPic(
      base64Image: string,
      options?: PrintPictureOptions
    ): void | PromiseLike<void>;
    static cutLine(
      line: number
    ): void | string | PromiseLike<void> | PromiseLike<string>;
    static selfTest(): void | PromiseLike<void>;
    static rotate(
      rotate: number | typeof ESC_ROTATION
    ): void | string | PromiseLike<void> | PromiseLike<string>;
    static setBold(
      weight: number | typeof ESC_ROTATION
    ): void | string | PromiseLike<void> | PromiseLike<string>;
    static printQRCode(
      content: string,
      size: number,
      correctionLevel: number | typeof ERROR_CORRECTION,
      leftPadding?: number
    ): void | string | PromiseLike<void> | PromiseLike<string>;
    static printBarCode(
      content: string,
      barcodeType: number | typeof BARCODETYPE,
      width: number,
      height: number,
      fontType: number | typeof FONTTYPE,
      fontPosition: number
    ): void | string | PromiseLike<void> | PromiseLike<string>;
  }

  export class BluetoothTscPrinter {
    static printLabel(
      options: PrintLabelOptions
    ): void | string | PromiseLike<void> | PromiseLike<string>;
  }
}
