$(document).ready(function () {
    // create local storage from search inout


    //get items from local stoarge
    function init() {

    }
    // create updating current location forecast

    // create on click function 
    $('#weathersubmit').on("click", function (event) {
        event.preventDefault();

        console.log("click");
        // Empty search results
        $('#clear-all').clear();

        var city = $("#city").val();

        // adding url from opn weather app, city of user choice, units=imperial (farenheit) and api key
        if (city !== '') {
            //check if city is already in LS

            //save city to local storage
            var storedSearches = JSON.parse(localStorage.getItem(${'#localStorage"})
            getWeather(city)
        } else {
            $("error").html('Can not leave city blank' + 'Try again')
        }


    });


    function getWeather(city) {
        var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=048259ccf3f84222f1781be5f3d4ba8e";
        console.log(city)
        $.ajax({
            url: queryUrl,
            method: "GET"
        

        }).then(function (response) {
            // lat & long
            var lat = response.city.coord.lat
            var lon = response.city.coord.lon

            var weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&units=imperial&appid=048259ccf3f84222f1781be5f3d4ba8e`

            $.ajax({
                url: weatherUrl,
                method: "GET"

            }).then(function (data) {
                console.log(data);
                // var weatherDiv = $('#weatherDescription');
                var date = moment.unix(data.daily[0].dt).format('MMMM Do YYYY');
                // html containing weather description from search
                $('#date').text(date)
                $('#description').text(data.daily[0].weather[0].description);
                $('#tempMin').text(data.daily[0].temp.min);
                $('#tempMax').text(data.daily[0].temp.max);
                $('#humidity').text(data.daily[0].humidity);
                $('#uvIndex').text(data.daily[0].uvi);
                if ($('#uvIndex') < 3) {
                    $('<span/>'), { class: "uvGreen", html: uv }

                }

                var forecastDiv = $('#forecast');

                for (var i = 1; i < 6; i++) {
                    var htmlStr = ` <h1>${data.daily[i].weather[0].description}</h1>
                <p>Temperature Min: ${data.daily[i].temp.min}</p>
                <p>Temparature Max: ${data.daily[i].temp.max}</p>
                <p>Humidity: ${data.daily[i].humidity}</p>
                <p>UV Index: ${data.daily[i].uvi}</p>
                <p>Wind Speed: ${data.daily[i].wind_speed}</p>`

                    forecastDiv.append(htmlStr);
                    console.log(htmlStr)
                }

            })






        });

    }



});