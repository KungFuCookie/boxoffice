import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import css from "./style.css";

const Button = ({ label, onClick, className, style }) => (
  <button
    data-testid="onClickButton"
    onClick={onClick}
    style={style}
    className={classNames(css.component, className)}
  >
    {label}
  </button>
);

Button.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
};

export default Button;
