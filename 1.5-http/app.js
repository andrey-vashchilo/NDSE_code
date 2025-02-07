require('dotenv').config();
const http = require('http');
const config = require('./config');

const myAPIKey = process.env.myAPIKey || config.myAPIKey;
const city = process.env.CITY || config.CITY;
//console.log(myAPIKey);
//console.log(city);


const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myAPIKey}&units=metric`;
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}

http.get(url, (res) => {
  const { statusCode } = res;
  if (statusCode !== 200) {
    console.log(`statusCode: ${statusCode}`);
    return;
  }

  res.setEncoding('utf8');
  let rowData = '';
  res.on('data', (chunk) => rowData += chunk);
  res.on('end', () => {
    let parseData = JSON.parse(rowData);
    console.log(parseData);
    console.log('Прогноз погоды для', parseData.name);
    console.log('-----------------------');
    console.log('Температура:', parseData.main.temp, '°C');
    console.log('Скорость ветра:', parseData.wind.speed, 'м/сек');
    console.log('Влажность:', parseData.main.humidity, '%');
    console.log('Давление:', parseData.main.pressure, 'hPa');
  })
}).on('error', (err) => {
  console.error(err);
})