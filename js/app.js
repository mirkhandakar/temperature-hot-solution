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
    setInnterText('city', temperature.name);
    setInnterText('temperature', temperature.main.temp);
    setInnterText('condition', temperature.weather[0].main);
    console.log(temperature);
}