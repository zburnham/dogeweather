snowStorm.snowCharacter = '';
//if ($.doge.suchicon = '10n') {
//    snowStorm.snowCharacter = '&bull;';
//}

console.log($("#weather-icon"));
$("document").ready(function(){
    console.log("Inner HTML: " + $("#weather-icon").html());
    switch ($("#weather-icon").html()) {
        // shower rain
        case "09d":
        case "09n":
            snowStorm.snowCharacter = '|';
            snowStorm.snowColor = '#555';
            snowStorm.vMaxY = 15;
            break;
        // rain
        case "10d":
            snowStorm.snowCharacter = '|';
            snowStorm.snowColor = '#555';
            snowStorm.vMaxY = 15;
            snowStorm.flakesMaxActive = 256;
            break;
        case "10n":
            snowStorm.snowCharacter = '|';
            snowStorm.snowColor = '#555';
            snowStorm.vMaxY = 15;
            break;
        //DEBUG
        case "50d":
            snowStorm.snowCharacter = '|';
            snowStorm.snowColor = '#555';
            snowStorm.vMaxY = 15;
            break;
        // thunderstorm
        case "11d":
        case "11n":
            snowStorm.snowCharacter = '|';
            snowStorm.snowColor = '#555';
            snowStorm.vMaxY = 15;
            break;
        // snow
        case "13d":
        case "13n":
            snowStorm.snowCharacter = '&bull;';
            break;
    } 
});


