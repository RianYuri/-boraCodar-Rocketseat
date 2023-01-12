import "./AppSmall.css";
import mainImg from "../../../public/mainImg.svg";
import TitleAppSmall from "../Title/TitleAppSmall";
import ButtonsAppMedium from "../Buttons/ButtonsAppMedium";
const AppSmall = () => {
  return (
    <div className="content-app__small">
      <div className="content-app__smallTitle">
        <img src={mainImg} className="img-app__small"/>
        <TitleAppSmall />
      </div>
      <ButtonsAppMedium/>
    </div>
  );
};

export default AppSmall;
