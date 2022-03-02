const API_KEY = `33bd79e5c641a9b75a23d317e5e43ffc`;

const searchByCity = () => {
    const city = document.getElementById('input-text').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));
    document.getElementById('input-text').value = '';
}

const displayTemp = temps => {
    const city = document.getElementById('city-name');
    const tempNow = document.getElementById('temp-now');
    const mainW = document.getElementById('main');
    const iconW = document.getElementById('icon');

    city.innerText = `${temps.name}`;
    tempNow.innerText = `${temps.main.temp}`;
    mainW.innerText = `${temps.weather[0].main}`;


    const url = `http://openweathermap.org/img/wn/${temps.weather[0].icon}@2x.png`;
    iconW.setAttribute('src', url);
}