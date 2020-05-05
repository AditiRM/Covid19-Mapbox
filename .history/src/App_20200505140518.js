import React, { useRef, useEffect } from "react";
import "./App.scss";
import mapboxgl from "mapbox-gl";

// React hook to fetch the data
import useSWR from "swr"; 
// npm module to get ISO Code for countries
import lookup from "country-code-lookup"; 
// Mapbox css - needed to make tooltips work later 
import "mapbox-gl/dist/mapbox-gl.css";

//Access Token from Mapbox
mapboxgl.accessToken = "pk.eyJ1IjoiYWRpdGlybSIsImEiOiJjazlweW5odnIwZjd4M2tueGh1Z2R0cHVxIn0.62F6sbO7mz3aR9hMvXf0YA";

function App() {
   // DOM element to render map
  const mapboxElRef = useRef(null);

  // Initialization of map
  useEffect(() => {
      const map = new mapboxgl.Map({
      container: mapboxElRef.current,
      style: "mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k",
      center: [16, 27], // initial geo location
      zoom: 2 // initial zoom
    });

    // Addtion of  navigation controls to the top right of the canvas
    //For Zoom-in and Zoom-out
    map.addControl(new mapboxgl.NavigationControl());
  }, []);

  return (
    <div className="App">
      <div className="mapContainer">
        {/* Assigned Mapbox container */}
        <div className="mapBox" ref={mapboxElRef} />
      </div>
    </div>
  );
}

export default App;