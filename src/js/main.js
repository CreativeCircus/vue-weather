console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)



var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!',
		current: {},
		forecast: {},
	},
	// *created* is a special function in Vue that gets called automatically when the Vue app is *created*
	created: function() {
		
		// some variables that the weather api needs
		const API_KEY = '76dca5305f4461038284419c25364718'
		const ZIP = 30324
		// http://api.openweathermap.org/data/2.5/weather?zip=${ZIP},us&units=imperial&APPID=${API_KEY}
		// http://api.openweathermap.org/data/2.5/forecast/?zip=${ZIP},us&units=imperial&APPID=${API_KEY}

		// this is an ajax call to get the current weather data for Atlanta
		// when it gets a response, it just dumps the response data into the *current* property of the Vue app's data object
		axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${ZIP},us&units=imperial&APPID=${API_KEY}`)
			.then((response) => {
				console.log('current', response.data);
				this.current = response.data // here is where we send the API's response into the Vue data
			})
			.catch((error) => {
				console.log(error);
			});
		
		// this is an ajax call to get the forecasted weather data for Atlanta
		// when it gets a response, it just dumps the response data into the *forecast* property of the Vue app's data object
		axios.get(`http://api.openweathermap.org/data/2.5/forecast/?zip=${ZIP},us&units=imperial&APPID=${API_KEY}`)
			.then((response) => {
				console.log('forecast', response.data);
				this.forecast = response.data // here is where we send the API's response into the Vue data		
			})
			.catch((error) => {
				console.log(error);
			});
	}
})