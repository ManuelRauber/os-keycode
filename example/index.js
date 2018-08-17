const iohook = require('iohook');
const osKeycode = require('../index');

iohook.on('keydown', event => console.log(`Keycode: ${event.rawcode}, translated to: ${JSON.stringify(osKeycode.keyname(event.rawcode))}, ` +
  `reverse translated: ${osKeycode.keycode(osKeycode.keyname(event.rawcode).keys[0])} whole event: ${JSON.stringify(event)}`));
iohook.start(false);
