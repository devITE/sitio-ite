import PropTypes from "prop-types";
import "./TitlePages.css";

const TitlePages = (props) => {
  return (
    <div className="mb-3">
      {props.title === "" ? (
        <span></span>
      ) : (
        <>
          <div className="triangle"></div>
          <div className="banner-header">
            <img
              src="https://itetlax.org.mx/assets/img/icons/ite.png"
              alt="ITE ICON"
              className="img-fluid"
            />
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

TitlePages.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
