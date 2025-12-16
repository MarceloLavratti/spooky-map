import "./ReportModal.css"
import IntensitySlider from "../IntensitySlider/IntensitySlider"
import ghost from "../../assets/images/ghost_m_white.png"
import poltergeist from "../../assets/images/poltergeist_m_white.png"
import monster from "../../assets/images/monster_m_white.png"
import ufo from "../../assets/images/ufo_m_white.png"
import { useState } from "react"

const ReportModal = ({ onClose }) => {

    const [intensity, setIntensity] = useState(3)

    return (
        <div id='reportModal' className='report-modal'>

            <p id="p-modal">O que aconteceu aqui?</p>

            <form action="" className="event-selection">
                <div className="event-type-selection">
                    <img src={ghost} alt="" className="img-choice" />
                    <label for="ghost">Aparição</label>
                    <input type="radio" id="ghost" name="reportEvent" value="GHOST" />
                </div>
                <div className="event-type-selection">
                    <img src={poltergeist} alt="" className="img-choice" />
                    <label for="poltergeist">Poltergeist</label>
                    <input type="radio" id="poltergeist" name="reportEvent" value="POLTERGEIST" />
                </div>
                <div className="event-type-selection">
                    <img src={monster} alt="" className="img-choice" />
                    <label for="creature">Criatura</label>
                    <input type="radio" id="creature" name="reportEvent" value="CREATURE" />
                </div>
                <div className="event-type-selection">
                    <img src={ufo} alt="" className="img-choice" />
                    <label for="ufo">Óvni</label>
                    <input type="radio" id="ufo" name="reportEvent" value="UFO" />
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
                {/* <div className="event-info-details">
                    <label htmlFor="">Intensidade do evento</label>
                    <input type="range" min="1" max="5" id="range" />
                </div> */}
                <IntensitySlider
                    value={intensity}
                    onChange={setIntensity}
                />
                <div className="event-info-details">
                    <button id="upload">Upload de mídia</button>
                </div>
            </div>
            <button id="send" onClick={onClose}>Enviar</button>
            <button id="close" onClick={onClose}>Cancelar</button>

        </div >
    )
}

export default ReportModal