import propTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Buttons = (props) => {
  return (
    <div className="scroll-bottom">
      {props.left && (
        <NavLink to={props.left} className="left hover">
          <span>&#10092;</span>
        </NavLink>
      )}
      {props.right && (
        <NavLink to={props.right} className="right hover">
          <span>&#10093;</span>
        </NavLink>
      )}
    </div>
  );
};

Buttons.propTypes = {
  left: propTypes.string,
  right: propTypes.string,
};

export default Buttons;
