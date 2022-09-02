let weather = {
    "apiKey" = "c8091670da5a99ee7fb4b42ffe6bffb0"
    fetchWeather:
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + appKey
    )
    .then((response) => response.json())
    .then((data) => console.log(data));
}