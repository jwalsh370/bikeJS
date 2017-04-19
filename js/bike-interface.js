var Bike = require('./../js/bike.js').bikeModule;


var currentBikeObject = new Bike();

var displayBikes = function(bikes) {
  bikes.forEach(function(bike) {
    console.log(bike);
    $('#showBike').append("<tr>"+"<td>"+bike.manufacturer+"</td>" +
                          "<td>"+bike.location+"</td>" +
                          "<td>"+bike.date+"</td>"+"</tr>");
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
