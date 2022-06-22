/* eslint-disable react/no-children-prop */
import React from "react";
import classNames from "classnames/bind";
import styles from "./content.module.scss";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const cx = classNames.bind(styles);

const Content = ({
  text,
  color,
  size,
  inline,
  italic,
  markdown,
  children,
  className,
}) => {
  const classes = cx(
    {
      content: true,
      italic,
    },
    className,
    [`color-${color}`],
    [`font-${size}`]
  );

  const customText = () => {
    if (markdown) {
      return (
        <ReactMarkdown
          className={classes}
          children={children}
          remarkPlugins={[remarkGfm]}
        />
      );
    } else {
      const CustomComponent = inline ? "span" : "p";

      return (
        <CustomComponent className={classes}>
          {children}
          {text}
        </CustomComponent>
      );
    }
  };

  return customText();
};

Content.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  inline: PropTypes.bool,
  italic: PropTypes.bool,
  markdown: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

Content.defaultProps = {
  text: "",
  color: "dark",
  size: "m",
  inline: false,
  italic: false,
  markdown: false,
  children: null,
  className: "",
};

export default Content;
