$(document).ready(function (){

$('#weathersubmit').on("click",function (event){
    event.preventDefault();

console.log("click");
// Empty search results
clear();

var city = $("#city").val();

// adding url from opn weather app, city of user choice, units=imperial (farenheit) and api key
var queryUrl = "https://www.api.openweathermap.org/data/2.5/forecast?q=" + city + " units=imperial" + "&appid=048259ccf3f84222f1781be5f3d4ba8e";

if (!city === '') {
    $.ajax ({
        url: queryUrl,
        method: "GET",
        datatype: "jsonp"

    }).then(function(response){
    var 

    }),

}else {
    $("error").html('Can not leave city blank' + 'Try again')
}


});






});