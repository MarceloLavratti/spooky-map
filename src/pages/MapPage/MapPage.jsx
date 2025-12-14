import { useState } from "react";
import MapView from "../../components/MapView/MapView";
import MarkerButton from "../../components/MarkerButton/MarkerButton";

const MapPage = () => {
  const [mapCenter, setMapCenter] = useState(null);
  const [markedPoint, setMarkedPoint] = useState(null);

  const handleMark = () => {
    if (!mapCenter) return;

    setMarkedPoint(mapCenter);
    console.log("Ponto marcado:", mapCenter);
  };

  return (
    <>
      <MapView onCenterChange={setMapCenter} markedPoint={markedPoint} />
      <MarkerButton onMark={handleMark} />
    </>
  );
};

export default MapPage;
