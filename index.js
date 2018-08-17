const keys = {
  up: { linux: 103, macOS: 126, windows: 20 },
  down: { linux: 108, macOS: 125, windows: 28 },
  left: { linux: 105, macOS: 123, windows: 25 },
  right: { linux: 106, macOS: 124, windows: 27 },
  backspace: { linux: 14, macOS: 117, windows: 8 },
  enter: { linux: 28, macOS: 76, windows: '*' },
  home: { linux: 102, macOS: 115, windows: 36 },
  end: { linux: 107, macOS: 119, windows: 35 },
  pageDown: { linux: 109, macOS: 121, windows: 34 },
  pageUp: { linux: 104, macOS: 116, windows: 33 },
  return: { linux: '*', macOS: 36, windows: 13 },
  delete: { linux: 111, macOS: 51, windows: 46 },
  tab: { linux: 15, macOS: 48, windows: 9 },
  spacebar: { linux: 57, macOS: 49, windows: 20 },
  shift: { linux: '*', macOS: 56, windows: 10 },
  shiftRight: { linux: '*', macOS: 60, windows: '*' },
  control: { linux: '*', macOS: 59, windows: 11 },
  menu: { linux: 139, macOS: 58, windows: 18 },
  printScreen: { linux: 210, macOS: '*', windows: 42 },
  escape: { linux: 1, macOS: 53, windows: 27 },
  capsLock: { linux: 58, macOS: 57, windows: 20 },
  help: { linux: 138, macOS: 114, windows: 47 },
  f1: { linux: 59, macOS: 122, windows: 112 },
  f2: { linux: 60, macOS: 120, windows: 113 },
  f3: { linux: 61, macOS: 99, windows: 114 },
  f4: { linux: 62, macOS: 118, windows: 115 },
  f5: { linux: 63, macOS: 96, windows: 116 },
  f6: { linux: 64, macOS: 97, windows: 117 },
  f7: { linux: 65, macOS: 98, windows: 118 },
  f8: { linux: 66, macOS: 100, windows: 119 },
  f9: { linux: 67, macOS: 101, windows: 120 },
  f10: { linux: 68, macOS: 109, windows: 121 },
  f11: { linux: 87, macOS: 103, windows: 122 },
  f12: { linux: 88, macOS: 111, windows: 123 },
  macFn: { linux: '*', macOS: 63, windows: '*' },
  macOption: { linux: '*', macOS: 58, windows: '*' },
  macCommand: { linux: '*', macOS: 55, windows: '*' },
  macOptionRight: { linux: '*', macOS: 61, windows: '*' },
  macCommandRight: { linux: '*', macOS: 54, windows: '*' },
  winLeftWindow: { linux: '*', macOS: '*', windows: 91 },
  winRightWindow: { linux: '*', macOS: '*', windows: 92 },
  winApplication: { linux: '*', macOS: 110, windows: 93 },
  q: { linux: 16, macOS: 12, windows: 81 },
  w: { linux: 17, macOS: 13, windows: 87 },
  e: { linux: 18, macOS: 14, windows: 69 },
  r: { linux: 19, macOS: 15, windows: 82 },
  t: { linux: 20, macOS: 17, windows: 84 },
  y: { linux: 21, macOS: 16, windows: 89 },
  u: { linux: 22, macOS: 32, windows: 85 },
  i: { linux: 23, macOS: 34, windows: 73 },
  o: { linux: 24, macOS: 31, windows: 79 },
  p: { linux: 25, macOS: 35, windows: 80 },
  a: { linux: 30, macOS: '*', windows: 65 },
  s: { linux: 31, macOS: 1, windows: 83 },
  d: { linux: 32, macOS: 2, windows: 68 },
  f: { linux: 33, macOS: 3, windows: 70 },
  g: { linux: 34, macOS: 5, windows: 71 },
  h: { linux: 35, macOS: 4, windows: 72 },
  j: { linux: 36, macOS: 38, windows: 74 },
  k: { linux: 37, macOS: 40, windows: 75 },
  l: { linux: 38, macOS: 37, windows: 76 },
  z: { linux: 44, macOS: 6, windows: 90 },
  x: { linux: 45, macOS: 7, windows: 88 },
  c: { linux: 46, macOS: 8, windows: 67 },
  v: { linux: 47, macOS: 9, windows: 86 },
  b: { linux: 48, macOS: 11, windows: 66 },
  n: { linux: 49, macOS: 45, windows: 78 },
  m: { linux: 50, macOS: 46, windows: 77 },
  0: { linux: 11, macOS: 29, windows: 48 },
  1: { linux: 2, macOS: 18, windows: 49 },
  2: { linux: 3, macOS: 19, windows: 50 },
  3: { linux: 4, macOS: 20, windows: 51 },
  4: { linux: 5, macOS: 21, windows: 52 },
  5: { linux: 6, macOS: 23, windows: 53 },
  6: { linux: 7, macOS: 22, windows: 54 },
  7: { linux: 8, macOS: 26, windows: 55 },
  8: { linux: 9, macOS: 28, windows: 56 },
  9: { linux: 10, macOS: 25, windows: 57 },
  period: { linux: 52, macOS: 47, windows: 190 },
  comma: { linux: 51, macOS: 43, windows: 188 },
  slash: { linux: 53, macOS: 44, windows: 191 },
  num0: { linux: 82, macOS: 82, windows: 96 },
  num1: { linux: 79, macOS: 83, windows: 97 },
  num2: { linux: 80, macOS: 84, windows: 98 },
  num3: { linux: 81, macOS: 85, windows: 99 },
  num4: { linux: 75, macOS: 86, windows: 100 },
  num5: { linux: 76, macOS: 87, windows: 101 },
  num6: { linux: 77, macOS: 88, windows: 102 },
  num7: { linux: 71, macOS: 89, windows: 103 },
  num8: { linux: 72, macOS: 91, windows: 104 },
  num9: { linux: 73, macOS: 92, windows: 105 },
  multiply: { linux: 55, macOS: 67, windows: 106 },
  add: { linux: 78, macOS: 69, windows: 107 },
  subtract: { linux: 74, macOS: 78, windows: 109 },
  divide: { linux: 98, macOS: 75, windows: 111 },
  decimal: { linux: 83, macOS: 65, windows: 110 },
  numEqual: { linux: 117, macOS: 81, windows: '*' },
};

let platform = 'linux';

if (process.platform === 'win32') {
  platform = 'windows';
}

if (process.platform === 'darwin') {
  platform = 'macOS';
}

const platformKeys = {};

Object.keys(keys).forEach(key => {
  const possibleKey = keys[key][platform];
  let platformKey = platformKeys[possibleKey];

  if (!platformKey) {
    platformKeys[possibleKey] = platformKey = {};
  }

  if (possibleKey === '*') {
    if (platformKey.keys) {
      platformKey.keys.push(key);
    }
    else {
      platformKey.keys = [key];
      platformKey.code = possibleKey;
      delete platformKey.key;
    }
  }
  else {
    platformKey.code = keys[key][platform];
    platformKey.key = key;
    platformKey.keys = [key];
  }
});

const keycode = keyname => {
  const key = keys[keyname];

  if (!key) {
    return `Keyname ${keyname} not found`;
  }

  const platformKey = key[platform];

  return platformKey === '*' ? 0 : platformKey;
};

module.exports.keyname = keycode => keycode === 0 ? platformKeys['*'] : platformKeys[keycode];
module.exports.keycode = keycode;
