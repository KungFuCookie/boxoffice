import React from "react";
import PropTypes from "prop-types";
import css from "./styles.css";

const DemoPoster = ({ src }) => (
  <div
    className={css.container}
    style={{ backgroundImage: `url(${src})` }}
  ></div>
);

DemoPoster.propTypes = {
  src: PropTypes.string,
};

export default DemoPoster;
