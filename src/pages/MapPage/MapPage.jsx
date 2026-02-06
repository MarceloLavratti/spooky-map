import { useState } from "react";
import MapView from "../../components/MapView/MapView";
import MarkerButton from "../../components/MarkerButton/MarkerButton";
import ReportModal from "../../components/ReportModal/ReportModal";
import SideBar from "../../components/SideBar/SideBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import { searchAddress } from "../../services/geocodingService.js";
import { reverseGeocode } from "../../services/geocodingService.js"

const MapPage = () => {
  const [mapCenter, setMapCenter] = useState(null);
  const [markedPoint, setMarkedPoint] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState(null)


  const handleMark = async () => {
    if (!mapCenter) return;

    setMarkedPoint(mapCenter);
    setIsModalOpen(true);

    const fetchedAddress = await reverseGeocode(
      mapCenter.lat,
      mapCenter.lng
    )

    setAddress(fetchedAddress)

    console.log("Ponto marcado:", mapCenter);
    console.log("Rua:", address.street, address.number);
    console.log("Bairro:", address.neighborhood);
    console.log("Cidade:", address.city);
    console.log("Estado:", address.state);
    console.log("CEP:", address.postalCode);
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
      <MapView
        mapCenter={mapCenter}
        onCenterChange={setMapCenter}
        markedPoint={markedPoint}
      />
      <MarkerButton onMark={handleMark} />
      <ReportModal isModalOpen={isModalOpen} onClose={handleCloseModal} address={address} />
    </>
  );
};

export default MapPage;
