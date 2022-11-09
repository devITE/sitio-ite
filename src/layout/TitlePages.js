import iteIcon from "../assets/img/icons/ite.png";

const TitlePages = (props) => {
  return (
    <div className="mb-3">
      {props.title === "" ? (
        <span></span>
      ) : (
        <>
          <div className="triangle"></div>
          <div className="banner-header">
            <img src={iteIcon} alt="ITE ICON" className="img-fluid" />
            {props.title}
          </div>
          <hr className="hr-bottom" />
        </>
      )}
      {props.subTitle === "" ? (
        <span></span>
      ) : (
        <div className="subtitle mb-5">{props.subTitle}</div>
      )}
    </div>
  );
};
export default TitlePages;
