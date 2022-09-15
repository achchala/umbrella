let weather = {
    "apiKey" = "c8091670da5a99ee7fb4b42ffe6bffb0",
    fetchWeather: function (city) {
        // function takes the city name as a parameter and fetches data from URL
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey //this is implicit parameter
        )
            .then((response) => response.json())
            // once URL is fetched, then reads response stream and returns a promise
            .then((data) => console.log(data));
            //then the data is logged in the console
    },
    displayWeather: function(data) {
        const { name } = data;
        //to get the city name from the data object (that we got from the URL)
        const { icon, description } = data.weather;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = 
            "http://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        //removes loading if it's there
    },
    search: function () {
        this.fetchWeather(document.querySelector(".searchBar").value);
        //fetching weather of search bar's value
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
    //when the search button is clicked, it gets the content of the search bar and searches for it
});

document
  .querySelector(".searchBar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Brampton");