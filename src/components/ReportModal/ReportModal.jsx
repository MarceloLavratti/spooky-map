import "./ReportModal.css";
import IntensitySlider from "../IntensitySlider/IntensitySlider";
import { EVENT_ASSETS } from "../../constants/eventAssets";
import { useState } from "react";

const ReportModal = ({ isModalOpen, onClose, address }) => {

  const [intensity, setIntensity] = useState(1);
  // const modal = document.querySelector(".report-modal");

  const intensityImages = {
    1: EVENT_ASSETS.EYE1.image,
    2: EVENT_ASSETS.EYE2.image,
    3: EVENT_ASSETS.EYE3.image,
    4: EVENT_ASSETS.EYE4.image,
    5: EVENT_ASSETS.EYE5.image,
  };

  if (!address) return null;

  return (
    <div>
      <div id="reportModal" className={`report-modal ${isModalOpen ? "open" : ""}`}>
        <div id="location">
          <span className="material-symbols-outlined location-symbol">location_on</span>
          <p id="modal-address">{address.street}, {address.number}, {address.city}, {address.state}</p>
        </div>
        <p className="p-modal">O que aconteceu aqui?</p>
        <form action="" className="event-selection">
          <div className="event-type-selection">
            <input type="radio" id="ghost" name="reportEvent" />
            <label htmlFor="ghost">
              <img
                src={EVENT_ASSETS.GHOST.image}
                className="img-choice ghost-animation"
              />
              <span>Aparição</span>
            </label>
          </div>
          <div className="event-type-selection">
            <input
              type="radio"
              id="poltergeist"
              name="reportEvent"
              value="POLTERGEIST"
            />
            <label htmlFor="poltergeist">
              <img
                src={EVENT_ASSETS.POLTERGEIST.image}
                alt=""
                className="img-choice poltergeist-animation"
              />
              <span>Poltergeist</span>
            </label>
          </div>
          <div className="event-type-selection">
            <input
              type="radio"
              id="monster"
              name="reportEvent"
              value="monster"
            />
            <label htmlFor="monster">
              <img
                src={EVENT_ASSETS.MONSTER.image}
                alt=""
                className="img-choice monster-animation"
              />
              <span>Criatura</span>
            </label>
          </div>
          <div className="event-type-selection">
            <input type="radio" id="ufo" name="reportEvent" value="UFO" />
            <label htmlFor="ufo">
              <img
                src={EVENT_ASSETS.UFO.image}
                alt=""
                className="img-choice ufo-animation"
              />
              <span>Óvni</span>
            </label>
          </div>
        </form>

        <div className="event-info">
          <div className="event-info-details">
            <label>Título</label>
            <input type="text" id="title" />
          </div>
          <div className="event-info-details">
            <label>Descrição</label>
            <textarea name="" id="text"></textarea>
          </div>
          <div className="event-info-details">
            <label>Quando aconteceu?</label>
            <input type="date" id="date" />
          </div>
          <div>
            <label>Intensidade do evento</label>
            <div className="intensity-style">
              <IntensitySlider value={intensity} onChange={setIntensity} />
              <img
                src={intensityImages[intensity]}
                alt=""
                className={`eye-animation intensity-${intensity}`}
              />
            </div>
          </div>
          <div className="send-style">
            <button id="upload">
              Evidência
              <span className="material-symbols-outlined">upload</span>
            </button>
          </div>
          <div className="modal-btns">
            <button id="send" className="btns-style" onClick={onClose}>
              Enviar
            </button>
            <button id="close" className="btns-style" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
