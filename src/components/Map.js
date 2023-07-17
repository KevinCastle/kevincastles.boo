import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/avatar.png'

const Map = () => {
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
                        coordinates: {
                            lat: -33.45694,
                            lng: -70.64827
                        }
                    }
                },
            ]
        };

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-70.64827, -33.45694], // center map on Chad
            zoom: 10
        });
        
        const marker = geojson.features[0]; // Get the first marker
        
        // // Create a DOM element for the marker
        // const markerIcon = document.createElement('div');
        // markerIcon.className = 'markerIcon w-[30%] h-[30%] bg-[length:100%] bg-no-repeat';
        // markerIcon.style.backgroundImage = `url('/images/profile/avatar.png')`;

        const markerIcon = document.createElement('div');
        markerIcon.className = 'markerIcon w-[65px] h-[65px] hover:w-[85px] hover:h-[85px] bg-primary-500/20 border-2 hover:border-4 border-solid border-white rounded-full overflow-hidden flex justify-center items-center hover:transition-all ease-in-out duration-500';

        // Create the image element
        const image = document.createElement('img');
        image.src = '/images/profile/avatar.png';
        image.className = 'w-[80%] h-[80%] rounded-full';

        // Append the image to the container
        markerIcon.appendChild(image);

        new mapboxgl.Marker(markerIcon)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map.current);
    }, []);
        
  return (
      <div className='w-full h-full'>
          <div className="map-container" ref={mapContainer} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default Map