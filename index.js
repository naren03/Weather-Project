//Init Storage
const storage = new Storage();
const defaultCity = storage.getLocationData();

//Init Weather
const weather = new Weather(defaultCity);
//Init UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', getData());

document.getElementById('changeBtn').addEventListener('click', () => {
	//New City
	const city = document.getElementById('newCity').value;

	//Changing City
	weather.changeLoc(city);
	//Changing City in LS
	storage.setLocationData(city);

	//calling weather API
	getData();

	//hide modal
	$('#locModal').modal('hide');

	//clearing value
	document.getElementById('newCity').value = '';
});

function getData() {
	weather
		.getWeather()
		.then((data) => ui.paintData(data))
		.catch((err) => console.log(err));
}
