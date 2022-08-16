const API_KEY = `ba4f9cf22043e770a415aacc5a41554e`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const setInnterText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    console.log(temperature);
    setInnterText('city', temperature.name);
    setInnterText('temperature', temperature.main.temp);
    setInnterText('condition', temperature.weather[0].main);


    //set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}