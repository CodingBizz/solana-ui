import React from "react";
import styles from "./card.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Card = ({
  borderRadius,
  padding,
  boxShadow,
  children,
  color,
  className,
}) => {
  const classes = cx(
    {
      card: true,
      borderRadius,
      padding,
      boxShadow,
    },
    [`background-${color}`],
    className
  );

  return <div className={classes}>{children}</div>;
};

Card.propTypes = {
  borderRadius: PropTypes.bool,
  padding: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.string,
  className: PropTypes.string,
};

Card.defaultProps = {
  borderRadius: false,
  padding: true,
  boxShadow: true,
  children: null,
  color: "",
  className: "",
};

export default Card;
