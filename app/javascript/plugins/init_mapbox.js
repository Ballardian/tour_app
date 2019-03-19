function initMap() {

  var Delhi = {lat: 28.644800, lng: 77.216721};
  var Amritsar = {lat: 31.63, lng: 74.87};
  var Punjab = {lat: 30.83, lng: 76.50};
  var Rishikesh = {lat: 30.087160, lng: 78.268112};
  var Ashram = {lat: 30.1098, lng: 78.3122};
  var Shivapuri = {lat: 25.424120, lng: 77.657990};
  var Agra = {lat: 27.173891, lng: 78.042068};

  var itineraryCoordinates = [
    Delhi, Amritsar, Punjab, Rishikesh, Ashram, Rishikesh, Shivapuri, Agra, Delhi
  ];

  // for markers
  var labels = '1234567';
  var labelIndex = 0;

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

  // create markers
  itineraryCoordinates.forEach(function(location) {
    var marker = new google.maps.Marker({
      position: location,
      label: labels[labelIndex++ % labels.length],
      map: map
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
