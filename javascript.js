//Initialize the map in the JavaScript file, setting the map to display the whole world. We'll use Mapbox tiles for the basemap. Be sure to replace {accessToken} with your own personal Mapbox access token:

var map = L.map('map').fitWorld();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoiamVzc2ljYWJwbGFuYWxwIiwiYSI6ImNrMndvN2g0cjBoam0zYmw2eXd0bm12bTcifQ.RNICUHzCzEvRkIPxzq_RBg}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v10',
}).addTo(map);

//function onLocationFound(e) {
//    var radius = e.accuracy; //this defines a variable radius as the accuracy value returned by the locate method divided by 2. It is divided by 2 because the accuracy value is the sum of the estimated accuracy of the latitude plus the estimated accuracy of the longitude. The unit is meters.
//
//    L.marker(e.latlng).addTo(map)  //this adds a marker at the lat and long returned by the locate function.
//        .bindPopup("You are within " + Math.round(radius * 3.28084) + " feet from this point").openPopup(); //this binds a popup to the marker. The text of the popup is defined here as well. Note that we multiply the radius by 3.28084 to convert the radius from meters to feet and that we use Math.round to round the conversion to the nearest whole number.

//    L.circle(e.latlng, radius).addTo(map); //this adds a circle to the map centered at the lat and long returned by the locate function. Its radius is set to the var radius defined above.
//}

//map.on('locationfound', onLocationFound); //this is the event listener

//function onLocationError(e) {
//  alert(e.message);
//}

//map.on('locationerror', onLocationError);

//At the bottom of your JavaScript code, call the locate method with the following options:
//map.locate({setView: true, maxZoom: 16});
