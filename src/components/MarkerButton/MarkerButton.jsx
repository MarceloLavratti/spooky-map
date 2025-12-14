import "./MarkerButton.css";

const MarkerButton = ({ onMark }) => {
  return (
    <div className="btn-component">
      <button className="btn-marker" onClick={onMark}>
        Marcar
      </button>
    </div>
  );
};

export default MarkerButton;
