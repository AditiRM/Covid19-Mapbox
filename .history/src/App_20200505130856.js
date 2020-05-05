import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import useSWR from "swr"; // React hook to fetch the data
import lookup from "country-code-lookup"; // npm module to get ISO Code for countries

import "./App.scss";

// Mapbox css - needed to make tooltips work later in this article
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1IjoiYWRpdGlybSIsImEiOiJjazlweW5odnIwZjd4M2tueGh1Z2R0cHVxIn0.62F6sbO7mz3aR9hMvXf0YA";

function App() {
  const mapboxElRef = useRef(null); // DOM element to render map

  // Initialize our map
  useEffect(() => {
    // You can store the map instance with useRef too
    const map = new mapboxgl.Map({
      container: mapboxElRef.current,
      style: "mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k",
      center: [16, 27], // initial geo location
      zoom: 2 // initial zoom
    });

    // Add navigation controls to the top right of the canvas
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