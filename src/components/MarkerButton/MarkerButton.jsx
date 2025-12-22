import "./MarkerButton.css";

const MarkerButton = ({ onMark }) => {
  return (
    <div className="btn-component">
      <button
        className="material-symbols-outlined btn-marker "
        onClick={onMark}
      >
        add_location
      </button>
    </div>
  );
};

export default MarkerButton;
