import "bootstrap";
import jQuery from "jquery";
// import 'mapbox-gl/dist/mapbox-gl.css';

// import homepage scroll
import { scroll } from '../components/scroll_home';
import { initMap } from '../plugins/init_mapbox';
import { modal } from '../components/modal';

scroll();
initMap();
modal();


