import React, { Component } from 'react';
const { compose, withProps, withStateHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,Marker
} = require("react-google-maps");

const google=window.google

export const StyledMapWithAnInfoBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB16XYyu8F1mwWm82fqCQgCehVhmngiJCg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `200px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
    <Marker
      position={{ lat: props.lat, lng: props.lng }}
      onClick={props.onToggleOpen}
    >
    </Marker>
  </GoogleMap>
);