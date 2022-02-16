import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
const containerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 23.810331,
  lng: 90.412521,
};

const Maps = () => {
  return (
    <div className="container ">
      <h1>Google Map Location</h1>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Maps;
