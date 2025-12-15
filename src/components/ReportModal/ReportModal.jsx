import "./ReportModal.css"

const ReportModal = ({ onClose }) => {
    return (
        <div id='reportModal' className='report-modal'>

            <p>O que aconteceu aqui?</p>
            <form action="">
                <fieldset>
                    <legend>Qual tipo de evento?</legend>
                    <label for="ghost">Aparição</label>
                    <input type="radio" id="ghost" name="reportEvent" value="GHOST" />
                    <label for="ufo">Óvni</label>
                    <input type="radio" id="ufo" name="reportEvent" value="UFO" />
                    <label for="poltergeist">Poltergeist</label>
                    <input type="radio" id="poltergeist" name="reportEvent" value="POLTERGEIST" />
                    <label for="creature">Criatura</label>
                    <input type="radio" id="creature" name="reportEvent" value="CREATURE" />
                </fieldset>
            </form>
            <button id="send" onClick={onClose}>Enviar</button>
            <button id="close" onClick={onClose}>Cancelar</button>

        </div >
    )
}

export default ReportModal