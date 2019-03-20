function initMap() {

  var Delhi = {lat: 28.644800, lng: 77.216721};
  var Amritsar = {lat: 31.63, lng: 74.87};

  var Rishikesh = {lat: 30.087160, lng: 78.268112};


  var Agra = {lat: 27.173891, lng: 78.042068};


  var itineraryCoordinates = [
    Delhi, Amritsar, Rishikesh, Agra
  ];

  var itineraryDetails = [
    "<b>Day 1</b><br> Arrival at hotel and sightseeing in Delhi (arrival time dependent) <br><br> <b>Day 10</b><br> Wake up early to see the sun rise over the Taj Mahal and drive back to Delhi for final shopping opportunities. We'll spend our last evening at the sound and light show at the Red Fort",
    "<b>Day 2</b><br> Train ride to Amritsar and an evening tour of The Golden Temple <br><br> <b>Day 3</b><br> Experience life in a Punjab village and watch the border closing ceremony between India and Pakistan",
    "<b>Day 4</b><br> Train ride to Rishikesh and experience the religious Ganga Aarti ceremony on the River Ganges <br><br> <b>Day 5</b><br> Morning yoga class and then walk to the Beatles Ashram where the Beatles spent time on the 1960s working on their spirituality and music <br><br> <b>Day 6</b><br> An early wake up call and an hour drive up to a beautiful mountainous sunrise point. After enjoying breakfast with a view, trek down to a waterfall where you can take a refreshing dip <br><br> <b>Day 7</b> Morning yoga class and then drive to Shivapuri to enjoy the scenery and camp out under the stars <br><br> <b>Day 8</b> Enjoy the early morning stillness of the mountains and an outdoors yoga class before returning to Rishikesh for a free day",
    "<b>Day 9</b><br> Train ride to Agra and watch the sunset over the River with the Taj Mahal in the distance"
  ];

  itineraryDetails.map((details, index) => {
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">'+"Day ${index}</h1>"+
    '<div id="bodyContent">'+
    "<p>${details}</p>"+
    '</div>'+
    '</div>';
  });

  // create map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: Delhi,
    mapTypeId: 'terrain'
  });

  // create polyline
  var itinerary = new google.maps.Polyline({
    path: itineraryCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 0.7,
    strokeWeight: 1.5
  });

  itineraryCoordinates.forEach((coordinates, index, array) => {
  // create markers
    var marker = new google.maps.Marker({
      position: coordinates,
      label: (index + 1).toString(),
      map: map
    });
  // create infowindow
    var infowindow = new google.maps.InfoWindow({
      content: itineraryDetails[index],
      maxWidth: 270
    });
  // open infowindow
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  });

  itinerary.setMap(map);
}

export { initMap };

// import mapboxgl from 'mapbox-gl';

// const mapElement = document.getElementById('map');

// const buildMap = () => {
//   mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
//   return new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/light-v9'
//   });
// };

// const addMarkersToMap = (map, markers) => {
//   markers.forEach((marker) => {
//     const popup = new mapboxgl.Popup({ offset: 25 }).setHTML('<h3>Delhi</h3> <p>Arrival at hotel and sightseeing in Delhi (arrival time dependent)</p>');
//     new mapboxgl.Marker()
//       .setLngLat([ marker.lng, marker.lat ])
//       .setPopup(popup)
//       .addTo(map);
//   });
// };

// const fitMapToMarkers = (map, markers) => {
//   const bounds = new mapboxgl.LngLatBounds();
//   markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
//   map.fitBounds(bounds, { padding: 70, maxZoom: 15 });
// };

// const initMapbox = () => {
//   if (mapElement) {
//     const map = buildMap();
//     const markers = JSON.parse(mapElement.dataset.markers);
//     addMarkersToMap(map, markers);
//     fitMapToMarkers(map, markers);
//   }
// };


// export { initMapbox };
