"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useQuery } from "@apollo/client";
import { gql } from "@/../graphql/gql";
import { Icon } from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const GET_SUPERMARKET_LOCATIONS = gql(`
  query GET_SUPERMARKET_LOCATIONS($supermarketId: Int!) {
    supermarket(id: $supermarketId) {
      locations {
        latitude
        longitude
        name
      }
    }
  }
`);

delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

export default function SupermarketMap() {
  const { data, loading, error } = useQuery(GET_SUPERMARKET_LOCATIONS, {
    variables: { supermarketId: 2 },
  });

  if (loading) return <div>Loading map...</div>;
  if (error) return <div>Error loading map: {error.message}</div>;

  const locations = data?.supermarket?.locations || [];

  // Portugal center coordinates
  const CENTER_POSITION = [39.5, -8];
  const ZOOM_LEVEL = 7;

  return (
    <div className="rounded-[10px] bg-white p-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white">
        Store Locations
      </h2>

      <div className="h-[600px] w-full">
        <MapContainer
          center={CENTER_POSITION}
          zoom={ZOOM_LEVEL}
          className="h-full w-full rounded-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={[location.latitude, location.longitude]}
            >
              {location.name && (
                <Popup>
                  {location.name}
                </Popup>
              )}
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}