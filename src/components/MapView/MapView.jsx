import {
  MapContainer,
  TileLayer,
  useMapEvents,
  ZoomControl,
  Marker,
} from "react-leaflet";
import CenterMarker from "../CenterMarker/CenterMarker.jsx";
import { EVENT_ASSETS } from "../../constants/eventAssets";

const MapEvents = ({ onCenterChange }) => {
  useMapEvents({
    moveend: (event) => {
      const map = event.target;
      const center = map.getCenter();

      onCenterChange({
        lat: center.lat,
        lng: center.lng,
      });
    },
  });

  return null;
};

const violetIcon = new L.Icon({
  iconUrl: EVENT_ASSETS.VIOLET_MARKER.image,
});

const MapView = ({ onCenterChange, markedPoint }) => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[-23.55, -46.63]}
        zoom={13}
        zoomControl={false}
        style={{ height: "100%", width: "100%" }}
      >
        {
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
        }
        <ZoomControl position="topright" />
        <MapEvents onCenterChange={onCenterChange} />

        {markedPoint && (
          <Marker
            position={[markedPoint.lat, markedPoint.lng]}
            icon={violetIcon}
          />
        )}
      </MapContainer>

      <CenterMarker />
    </div>
  );
};

export default MapView;
