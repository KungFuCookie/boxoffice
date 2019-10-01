import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import css from "./styles.css";

const DemoPoster = ({ src, className, style }) => (
  <div
    className={classNames(css.container, className)}
    style={{ ...(style || {}), backgroundImage: `url(${src})` }}
  ></div>
);

DemoPoster.propTypes = {
  src: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default DemoPoster;
