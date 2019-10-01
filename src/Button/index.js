import React from "react";
import PropTypes from "prop-types";

import css from "./style.css";

const Button = ({ label, onClick }) => (
  <button onClick={onClick} className={css.demo}>
    {label}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
};

export default Button;
