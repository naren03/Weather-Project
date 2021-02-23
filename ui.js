class UI {
	paintData(weather) {
		//location
		document.getElementById(
			'loc',
		).textContent = `${weather.name},${weather.sys.country}`;

		//desc
		document.getElementById(
			'desc',
		).textContent = `${weather.weather[0].description}`;

		//temp
		document.getElementById('temp').textContent = `${weather.main.temp}℃;`;

		//icon
		document
			.getElementById('icon')
			.setAttribute(
				'src',
				`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
			);

		//humidity
		document.getElementById(
			'humidity',
		).textContent = `Relative Humidity: ${weather.main.humidity}%`;

		//min max temp
		document.getElementById(
			'minMax',
		).textContent = `Min: ${weather.main.temp_min}℃    Max: ${weather.main.temp_max}℃`;

		//feels
		document.getElementById(
			'feels',
		).textContent = `Feels Like: ${weather.main.feels_like}℃ `;

		//wind
		document.getElementById(
			'wind',
		).textContent = `Wind Speed: ${weather.wind.speed}MPH `;
	}
}
