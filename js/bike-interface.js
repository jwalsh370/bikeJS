var Bike = require('./../js/bike.js').bikeModule;


var currentBikeObject = new Bike();

var displayBikes = function(bikes) {
  bikes.forEach(function(bike) {
    console.log(bike);
    $("#bike").empty();
    $('.showBike').append("<p>"+bike.manufacturer+"</p>" +
                          "<p>"+bike.location+"</p>" +
                          "<p>"+bike.date+"</p>");
  });
};

$(document).ready(function(){
  $('#bike').submit(function(){
    event.preventDefault();

    var zip = parseInt($('#zip').val());
    var distance = parseInt($('#distance').val());

    $('#zip').val('');
    $('#distance').val('');
    currentBikeObject.getBike(zip, distance, displayBikes);
  });
});
