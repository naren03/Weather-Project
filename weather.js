//API Call
// http://api.openweathermap.org/data/2.5/weather?q=alibag&appid=7471732c5c85be8160fa3cfeaf29feb8&units=metric

class Weather {
	constructor(city) {
		this.city = city;
	}

	async getWeather() {
		const response = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=7471732c5c85be8160fa3cfeaf29feb8&units=metric`,
		);

		const resData = await response.json();

		return resData;
	}

	changeLoc(city) {
		this.city = city;
	}
}
