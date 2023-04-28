import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
const mapbox = import.meta.env.VITE_MAPBOX_API_KEY;

mapboxgl.accessToken = mapbox;

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-118.64218875820667, 34.19365700736219],
      zoom: 15,
    });

    map.on('load', () => {
      console.log('Map loaded');

      const marker = new mapboxgl.Marker()
        .setLngLat([-118.64218875820667, 34.19365700736219])
        .addTo(map);

      console.log('Marker added');
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{
        width: '100%',
        height: '400px',
      }}
    />
  );
};

export default Map;
