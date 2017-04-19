function Bike(){
}

Bike.prototype.getBike = function(zip, distance, displayBikes) {
  $.get('http://bikeindex.org/api/v3/search?page=1&per_page=10&location=' + zip + '&distance=' + distance + '&stolenness=proximity').then(function(response){
    var allBikes= [];
    response.bikes.forEach(function(bike){
      var individualBike = {};

      individualBike.manufacturer = bike.manufacturer_name;
      individualBike.location = bike.stolen_location;
      individualBike.date = moment(bike.date_stolen, "X").format("MMMM DD YYYY");

      allBikes.push(individualBike);
    });
    displayBikes(allBikes);
  }).fail(function(error){
      $('.showBike').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
