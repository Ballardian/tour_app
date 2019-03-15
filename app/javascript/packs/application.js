import "bootstrap";
import jQuery from "jquery";
import 'mapbox-gl/dist/mapbox-gl.css';

// import homepage scroll
import { scroll } from '../components/scroll_home';
import { initMapbox } from '../plugins/init_mapbox';

scroll();
initMapbox();
