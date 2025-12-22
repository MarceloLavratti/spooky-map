import "./SideBar.css";
import { EVENT_ASSETS } from "../../constants/eventAssets";

const SideBar = () => {
  return (
    <div id="sideBar">
      <img src={EVENT_ASSETS.LOGO.image} alt="logo_img" className="logo-img" />
      <div className="side-bar-menu">
        <div className="side-bar-option">
          <span className="material-symbols-outlined side-bar-icon">
            skull_list
          </span>
          <span>Salvos</span>
        </div>
        <div className="side-bar-option">
          <span className="material-symbols-outlined side-bar-icon">
            history
          </span>
          <span>Recentes</span>
        </div>
        <div className="side-bar-option">
          <span className="material-symbols-outlined side-bar-icon">star</span>
          <span>Favoritos</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
