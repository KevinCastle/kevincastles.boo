import {
  useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import Image from 'next/image';

function Map({
  className = '',
}) {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [mapStyle, setMapStyle] = useState('streets-v12');
  const [width, setWidth] = useState(350);
  const [height, setHeight] = useState(250);

  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  const lat = -33.4419;
  const lng = -70.648;
  const zoom = 10;
  const logoUrl = 'https://kevcastles.netlify.app/images/logo/kevcastles-logo.png';

  useEffect(() => {
    const updateMapStyle = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setMapStyle(isDarkMode ? 'dark-v11' : 'streets-v12');
    };

    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          updateMapStyle();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (mapContainer.current) {
      setWidth(mapContainer.current.offsetWidth);
      setHeight(mapContainer.current.offsetHeight);
      // url-${logoUrl}(-70.6616,-33.4535)/
      setMap(`https://api.mapbox.com/styles/v1/mapbox/${mapStyle}/static/${lng},${lat},${zoom},0/${width}x${height}?access_token=${accessToken}&logo=false`);
    }
  }, [lat, lng, height, width, zoom, mapStyle, accessToken, mapContainer]);

  return (
    <div className="w-full h-full">
      <div className={className} ref={mapContainer}>
        {map && (
        <Image src={map} alt="Santiago Map" fill />
        )}
      </div>
    </div>
  );
}

export default Map;
