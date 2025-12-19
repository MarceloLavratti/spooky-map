import { useState } from "react";
import MapView from "../../components/MapView/MapView";
import MarkerButton from "../../components/MarkerButton/MarkerButton";
import ReportModal from "../../components/ReportModal/ReportModal";
import NavBar from "../../components/NavBar/NavBar";

const MapPage = () => {
  const [mapCenter, setMapCenter] = useState(null);
  const [markedPoint, setMarkedPoint] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMark = () => {
    if (!mapCenter) return;

    setMarkedPoint(mapCenter);
    setIsModalOpen(true);
    console.log("Ponto marcado:", mapCenter);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <NavBar />
      <MapView onCenterChange={setMapCenter} markedPoint={markedPoint} />
      <MarkerButton onMark={handleMark} />
      {isModalOpen && <ReportModal onClose={handleCloseModal} />}

    </>
  );
};

export default MapPage;
