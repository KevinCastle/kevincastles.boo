import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from 'react';

function Map({ className = '', lat = -33.45694, lng = -70.64827 }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    const geojson = {
      type: 'Feature',
      features: [
        {
          geometry: {
            type: 'Point',
            coordinates: [lng, lat],
          },
        },
      ],
    };

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: 11,
    });

    const marker = geojson.features[0];

    const markerIcon = document.createElement('div');
    markerIcon.className = 'markerIcon w-[85px] h-[85px] hover:w-[105px] hover:h-[105px] bg-primary-500/20 border-4 hover:border-6 border-solid border-white rounded-full overflow-hidden flex justify-center items-center hover:transition-all ease-in-out duration-500';

    const image = document.createElement('img');
    image.src = '/images/profile/avatar.webp';
    image.alt = 'Marker';
    image.className = 'w-[100%] h-[100%] object-cover';

    markerIcon.appendChild(image);

    new mapboxgl.Marker(markerIcon)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map.current);

    const mapboxInfo = document.querySelector('.mapboxgl-control-container');
    mapboxInfo.remove();

    // Cleanup on unmount
    return () => {
      map.current.remove();
    };
  }, [lat, lng]);

  return (
    <div className="w-full h-full">
      <div className={className} ref={mapContainer} />
    </div>
  );
}

export default Map;
