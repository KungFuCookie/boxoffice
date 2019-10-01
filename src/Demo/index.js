import React from "react";
import PropTypes from "prop-types";

import css from "./style.css";

const Button = ({ value }) => <button className={css.demo}>{value}</button>;

Button.propTypes = {
  value: PropTypes.string,
};

export default Button;
