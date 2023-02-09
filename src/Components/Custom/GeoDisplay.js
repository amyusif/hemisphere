import React from 'react'

const GeoDisplay = ({latitude}) => {
    const decGeo = latitude > 0 ? "Northern Hermisphere" : "Southern Hermisphere";
  return (
    <>
    <div>This is the Lat: {latitude}</div>
    <div>You are in the : {decGeo}</div>
    </>
  )
}

export default GeoDisplay