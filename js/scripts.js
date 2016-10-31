function Place(name, location, season) {
  this.place = name;
  this.locale = location;
  this.season = season;
};

Place.prototype.info = function() {
  return this.locale + this.season;
};

$(document).ready(function() {

  $('form#new-place').submit(function(event) {
    event.preventDefault();
    var inputtedName = $('input#new-name').val();
    var inputtedLocation = $('input#new-location').val();
    var inputtedSeason = $('input#new-season').val();
    var newPlace = new Place(inputtedName, inputtedLocation, inputtedSeason);
    $("ul#places").append("<li><span class='place'>" + newPlace.place + "</span></li>");
    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.place);
      $(".location").text(newPlace.locale);
      $(".season").text(newPlace.season);
    });

    $("input#name, input#location, input#season").val("");
  });
});
