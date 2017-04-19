var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function(){
  var currentBikeObject = new Bike();
  $('#bike').submit(function(){
    var color = $('#color').val();
    var zip = $parseInt(('#zip').val());
    var distance = $parseInt(('#distance').val());
    $('#color').val('');
    $('#zip').val('');
    $('#distance').val('');

    // currentBikeObject.getBike(color);
    currentBikeObject.getBike(zip, distance);
  });
});
