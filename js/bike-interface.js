var Bike = require('./../js/bike.js').bikeModule;

var displayBikes = function(bikes) {
  bikes.forEach(function(bike) {
    $('.showBike').append("<p>"+bike["manufacturer"]+"</p>" +
                          "<p>"+bike["location"]+"</p>" +
                          "<p>"+bike["date"]+"</p>");
  });
};

// var displayManufacturer = function(zip, manufacturer_name) {
//   $('.showBike').text("Bike maker: " + manufacturer_name);
// };

$(document).ready(function(){
  var currentBikeObject = new Bike();

  $('#bike').submit(function(){
    event.preventDefault();

    var zip = parseInt($('#zip').val(""));
    var distance = parseInt($('#distance').val(""));

    $('#zip').val('');
    $('#distance').val('');

    currentBikeObject.getBike(zip, distance, displayBikes);
  });
});
