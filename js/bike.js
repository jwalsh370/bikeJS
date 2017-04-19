function Bike(){
}

Bike.prototype.getBike = function(zip, distance) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=97204&distance=10&stolenness=proximity').then(function(response){
    console.log(response);
  }).fail(function(error){
      $('.showBike').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
