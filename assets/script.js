$( document ).ready(function() {
    var appID = "642f9e3429c58101eb516d1634bdaa4b";

    $(".query_btn").click(function(){
        var query_param = $(this).prev().val();

        if ($(this).prev().attr("placeholder") == "City") {
            var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&APPID=" + appID;
        }
        $.getJSON(weather,function(json){
            $("#city").html(json.name);
            $("#main_weather").html(json.weather[0].main);
            $("#description_weather").html(json.weather[0].description);
            $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
            $("#temperature").html(json.main.temp);
            $("#windspeed").html(json.wind.speed);
            $("#pressure").html(json.main.pressure);
            $("#humidity").html(json.main.humidity);
        });
    })
 
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(weather) {

    console.log(weather)
    })
    
    // Optional Code for temperature conversion
    // var fahrenheit = true;

    // $("#convertToCelsius").click(function() {
    //     if (fahrenheit) {
    //         $("#temperature").text(((($("#temperature").text() - 32) * 5) / 9));
    //     }
    //     fahrenheit = false;
    // });

    // $("#convertToFahrenheit").click(function() {
    //     if (fahrenheit == false) {
    //         $("#temperature").text((($("#temperature").text() * (9/5)) + 32));
    //     }
    //     fahrenheit = true;

    // })
});