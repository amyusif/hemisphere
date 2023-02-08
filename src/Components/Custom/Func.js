import React from "react";
import { useState } from "react";

const Func = () => {
  const [location, setLocation] = useState({ latitude: 20, errorMessage: " " });

  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      setLocation({
        latitude: position.coords.latitude,
      });
    },
    (error) => {
      setLocation({ errorMessage: error.message });
    }
  );
  if (location.latitude && !location.errorMessage) {
      return <div>{ location.latitude }</div>
  }
  if (!location.latitude && location.errorMessage) {
    return <div>{ location.errorMessage }</div>
}
else{
  return <div>Loading.......</div>
}
 
};

export default Func;
