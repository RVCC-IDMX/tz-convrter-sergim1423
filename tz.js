const moment = require('moment-timezone');
const yargs = require('yargs');
console.log(yargs.argv);
moment.tz.setDefault('America/New_York');

const message = `The time here is: ${moment().format()}`;
const message2 = `The time here is: ${moment()}`;

let command = yargs.argv._[0];
let params = yargs.argv;
let targetTimezone;

if (command == null) {
  console.log('Usage: node <script-file><timezone>');
  process.exit(1);
} else if ((targetTimezone = command)) {
  console.log(message);
  console.log(
    `The time in ${targetTimezone} is: ${moment().tz(targetTimezone).format()}`
  );
}
if (params.format) {
  console.log(message2);
  console.log(
    `The time in ${targetTimezone} is: ${moment().tz(targetTimezone)}`
  );
}
