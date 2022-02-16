import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";


mapboxgl.accessToken = `pk.eyJ1IjoibWFoZnV6YWxhbSIsImEiOiJja3pwNXZlY3gwMnNqMnVudjdoYjRqazYyIn0.8JCKXzUO4Y2rf1zXgE8D-g`;

const MapBoxDirection = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [90.389099, 23.791599],
      zoom: 10,
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      "top-left"
    );
  }, []);

  return (
    <div>
      <div id="map"></div>
    </div>
  );
};

export default MapBoxDirection;
