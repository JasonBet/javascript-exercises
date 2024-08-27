const convertToCelsius = function(temp) {
  let cTemp = Math.round(((temp - 32) * (5 / 9)) * 10) / 10;
  return cTemp;
};

const convertToFahrenheit = function(temp) {
  let fTemp = Math.round((temp * (9/5) + 32) * 10) / 10;
  return fTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
