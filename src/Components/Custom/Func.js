import React from "react";
import { useState } from "react";

const Func = () => {
  const [location, setLocation] = useState({ latitude: 20, longitude: 30 });

  window.navigator.geolocation.getCurrentPosition((position) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  });
  return (
    <>
      <div>
        <h3>The latitude of the current location is : {location.latitude}</h3>
      </div>
      <div>
        <h3>The longitude of the current location is : {location.longitude}</h3>
      </div>
    </>
  );
};

export default Func;
