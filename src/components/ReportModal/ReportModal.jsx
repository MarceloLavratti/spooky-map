import "./ReportModal.css"
import IntensitySlider from "../IntensitySlider/IntensitySlider"
import ghost from "../../assets/images/ghost_m_white.svg"
import poltergeist from "../../assets/images/poltergeist_m_white.svg"
import monster from "../../assets/images/monster_m_white.svg"
import ufo from "../../assets/images/ufo_m_white.svg"
import { useState } from "react"

const ReportModal = ({ onClose }) => {

    const [intensity, setIntensity] = useState(3)

    return (
        <div id='reportModal' className='report-modal'>

            <p id="p-modal">O que aconteceu aqui?</p>

            <form action="" className="event-selection">
                <div className="event-type-selection">
                    <input type="radio" id="ghost" name="reportEvent" />
                    <label htmlFor="ghost">
                        <img src={ghost} className="img-choice ghost-animation" />
                        <span>Aparição</span>
                    </label>
                </div>
                <div className="event-type-selection">
                    <input type="radio" id="poltergeist" name="reportEvent" value="POLTERGEIST" />
                    <label htmlFor="poltergeist">
                        <img src={poltergeist} alt="" className="img-choice poltergeist-animation" />
                        <span>Poltergeist</span>
                    </label>
                </div>
                <div className="event-type-selection">
                    <input type="radio" id="monster" name="reportEvent" value="monster" />
                    <label for="monster">
                        <img src={monster} alt="" className="img-choice monster-animation" />
                        <span>Criatura</span>
                    </label>
                </div>
                <div className="event-type-selection">
                    <input type="radio" id="ufo" name="reportEvent" value="UFO" />
                    <label for="ufo">
                        <img src={ufo} alt="" className="img-choice ufo-animation" />
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
                    <IntensitySlider
                        value={intensity}
                        onChange={setIntensity}
                    />
                </div>
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