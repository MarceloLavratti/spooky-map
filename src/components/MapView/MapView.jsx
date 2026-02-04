import {
  MapContainer,
  TileLayer,
  useMapEvents,
  useMap,
  ZoomControl,
  Marker,
} from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

import CenterMarker from "../CenterMarker/CenterMarker.jsx";
import { EVENT_ASSETS } from "../../constants/eventAssets";

// ===============================
// Escuta movimentos do mapa
// ===============================
const MapEvents = ({ onCenterChange, mapCenter }) => {
  useMapEvents({
    moveend: (event) => {
      if (!onCenterChange) return;

      const center = event.target.getCenter();

      // evita loop desnecessário
      if (
        mapCenter &&
        Math.abs(center.lat - mapCenter.lat) < 0.00001 &&
        Math.abs(center.lng - mapCenter.lng) < 0.00001
      ) {
        return;
      }

      onCenterChange({
        lat: center.lat,
        lng: center.lng,
      });
    },
  });

  return null;
};

// ===============================
// Controla o mapa via estado
// ===============================
const MapController = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    if (!center) return;

    map.setView([center.lat, center.lng], map.getZoom(), {
      animate: true,
    });
  }, [center, map]);

  return null;
};

// ===============================
// Ícone customizado (simples)
// ===============================
const violetIcon = new L.Icon({
  iconUrl: EVENT_ASSETS.VIOLET_MARKER.image,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// ===============================
// MapView
// ===============================
const MapView = ({ onCenterChange, markedPoint, mapCenter }) => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[-23.55, -46.63]} // centro inicial
        zoom={13}
        zoomControl={false}
        whenCreated={(map) => {
          const center = map.getCenter();
          onCenterChange({
            lat: center.lat,
            lng: center.lng,
          });
        }}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <ZoomControl position="topright" />

        {/* Escuta movimento manual */}
        <MapEvents onCenterChange={onCenterChange} mapCenter={mapCenter} />

        {/* Move mapa quando o estado muda (busca) */}
        <MapController center={mapCenter} />

        {/* Marker do ponto marcado */}
        {markedPoint && (
          <Marker
            position={[markedPoint.lat, markedPoint.lng]}
            icon={violetIcon}
          />
        )}
      </MapContainer>

      {/* Marcador central (+) */}
      <CenterMarker />
    </div>
  );
};

export default MapView;
