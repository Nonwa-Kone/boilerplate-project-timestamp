let dateUNIX = Date.now();

let dateUTC = new Date(dateUNIX);
console.log({ unix: dateUNIX, utc: dateUTC.toUTCString() });
