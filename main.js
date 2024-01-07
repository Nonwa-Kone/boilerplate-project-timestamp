let dateUNIX = Date.parse('2015-12-25');

let dateUTC = new Date(dateUNIX);
console.log({ unix: dateUNIX, utc: dateUTC.toUTCString() });
