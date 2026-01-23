import { useState } from "react";
import MapView from "../../components/MapView/MapView";
import MarkerButton from "../../components/MarkerButton/MarkerButton";
import ReportModal from "../../components/ReportModal/ReportModal";
import SideBar from "../../components/SideBar/SideBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import { searchAddress } from "../../services/geocodingService.js";

const MapPage = () => {
  const [mapCenter, setMapCenter] = useState(null);
  const [markedPoint, setMarkedPoint] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMark = () => {
    if (!mapCenter) return;
    console.log(mapCenter)
    setMarkedPoint(mapCenter);
    setIsModalOpen(true);
    console.log("Ponto marcado:", mapCenter);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = async (query) => {
    const coords = await searchAddress(query);

    if (!coords) {
      alert("Endereço não encontrado");
      return;
    }

    setMapCenter(coords);
  };

  return (
    <>
      <SideBar />
      <SearchBar onSearch={handleSearch} />
      <MapView mapCenter={mapCenter} />
      <MarkerButton onMark={handleMark} />
      <ReportModal isModalOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default MapPage;
