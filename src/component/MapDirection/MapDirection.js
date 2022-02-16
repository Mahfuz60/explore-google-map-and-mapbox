import React, { useState } from "react";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";

const location = {
  lat: 23.810331,
  lng: 90.412521,
};
const MapDirection = () => {
  const [response, setResponse] = useState(null);

  const directionsCallback = (res) => {
    if (res !== null) {
      setResponse(res);
    }
  };
  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
        <GoogleMap
          // required
          id="direction-example"
          // required
          mapContainerStyle={{
            height: "100vh",
            width: "100%",
          }}
          // required
          zoom={10}
          // required
          center={location}
        >
          <DirectionsService
            // required
            options={{
              destination: "gulshan 1 circle",
              origin: "mohammadpur bus station ",
              travelMode: "DRIVING",
            }}
            // required
            callback={directionsCallback}
          />

          {response !== null && (
            <DirectionsRenderer
              // required
              options={{
                directions: response,
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapDirection;
