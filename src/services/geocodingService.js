export async function searchAddress(query) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      query
    )}`
  );

  const data = await response.json();

  if (!data.length) return null;

  return {
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon),
  };
}

export const reverseGeocode = async (lat, lng) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );

    const data = await response.json();

    if (!data.address) return null;

    const address = data.address;

    return {
      street: address.road || address.pedestrian || "",
      number: address.house_number || "",
      neighborhood: address.suburb || address.neighbourhood || "",
      city: address.city || address.town || address.village || "",
      state: address.state || "",
      postalCode: address.postcode || "",
      country: address.country || "",
    };
  } catch (error) {
    console.error("Erro no reverse geocoding:", error);
    return null;
  }
};


