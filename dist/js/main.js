"use strict";

console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    current: {},
    forecast: {}
  },
  // *created* is a special function in Vue that gets called automatically when the Vue app is *created*
  created: function created() {
    var _this = this;

    // some variables that the weather api needs
    var API_KEY = '76dca5305f4461038284419c25364718';
    var ZIP = 30324; // http://api.openweathermap.org/data/2.5/weather?zip=${ZIP},us&units=imperial&APPID=${API_KEY}
    // http://api.openweathermap.org/data/2.5/forecast/?zip=${ZIP},us&units=imperial&APPID=${API_KEY}
    // this is an ajax call to get the current weather data for Atlanta
    // when it gets a response, it just dumps the response data into the *current* property of the Vue app's data object

    axios.get("http://api.openweathermap.org/data/2.5/weather?zip=".concat(ZIP, ",us&units=imperial&APPID=").concat(API_KEY)).then(function (response) {
      console.log('current', response.data);
      _this.current = response.data; // here is where we send the API's response into the Vue data
    }).catch(function (error) {
      console.log(error);
    }); // this is an ajax call to get the forecasted weather data for Atlanta
    // when it gets a response, it just dumps the response data into the *forecast* property of the Vue app's data object

    axios.get("http://api.openweathermap.org/data/2.5/forecast/?zip=".concat(ZIP, ",us&units=imperial&APPID=").concat(API_KEY)).then(function (response) {
      console.log('forecast', response.data);
      _this.forecast = response.data; // here is where we send the API's response into the Vue data		
    }).catch(function (error) {
      console.log(error);
    });
  }
});
//# sourceMappingURL=main.js.map
