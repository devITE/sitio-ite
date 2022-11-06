import iteIcon from "../assets/img/icons/ite.png";

const TitlePages = (props) => {
  return (
    <div className="mb-3">
      <div className="triangle"></div>
      <div className="banner-header">
        <img src={iteIcon} alt="ITE ICON" className="img-fluid" />
        {props.title}
      </div>
      <hr className="hr-bottom" />
    </div>
  );
};
export default TitlePages;
