//const cityInput = document.getElementById('city');
const submitButton = document.getElementById('submitBTN');
const updateTxt = document.getElementById('updateText');
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city');
const pressureInput = document.getElementById('pressure');
const windspeedInput = document.getElementById('windspeed');
const humidityInput = document.getElementById('humidity');
const temperatureInput = document.getElementById('temperature');
//const staticImage = document.getElementById('staticMap');

let apiRequest = new XMLHttpRequest();

cityForm.addEventListener('submit', ($event) => {
   $event.preventDefault();
    const chosenCity = cityInput.value;
    document.getElementById('staticMap').src = 'https://www.mapquestapi.com/staticmap/v5/map?key=xA1StDfcjv6G8mkGFjjERZXtMGBAvGGc&center= ' + chosenCity + '&size=300,200@2x';
    apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e&units=metric');
    apiRequest.send();

});

apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4) {
        if (apiRequest.status === 404) {
            return updateTxt.textContent = 'City not found', pressureInput.textContent = '0',
            windspeedInput.textContent = '0', humidityInput.textContent = '0', temperatureInput.textContent = '0';           
        }

        else {
            const response = JSON.parse(apiRequest.response);
            updateTxt.textContent = 'Current Weather Conditions in ' + response.name + ' is ' + response.weather[0].main + ' .';
            pressureInput.textContent = 'Pressure :  ' + response.main.pressure + '.';
            windspeedInput.textContent = 'Wind Speed :  ' + response.wind.speed + '.';
            humidityInput.textContent = 'Humidity :  ' + response.main.humidity + '.';
            temperatureInput.textContent = 'Feels Like :  ' + response.main.feels_like + '. Celcius';

        }
    }
}


