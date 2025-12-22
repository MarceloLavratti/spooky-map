import { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapControls = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    if (!center) return;

    map.setView([center.lat, center.lng], map.getZoom(), {
      animate: true,
    });
  }, [center, map]);
  return null;
};

export default MapControls;
