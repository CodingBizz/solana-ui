import React from "react";
import styles from "./transaction.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Card from "../card/card";
import { Content } from "../text";

const cx = classNames.bind(styles);

const Transaction = ({ className, content, date }) => {
  const classes = cx(
    {
      transaction: true,
    },
    className
  );

  return (
    <Card className={classes}>
      <div className={styles.icon}></div>
      <div className={styles.details}>
        {content && (
          <a
            href={`https://explorer.solana.com/tx/${content.text}?cluster=devnet`}
          >
            <Content color={"positive"} {...content} />
          </a>
        )}
        {date && <Content color={"positive"} {...date} />}
      </div>
    </Card>
  );
};

Transaction.propTypes = {
  className: PropTypes.string,
  content: PropTypes.shape(Content.propTypes),
  date: PropTypes.shape(Content.propTypes),
};

Transaction.defaultProps = {
  className: "",
  content: "",
  date: "",
};

export default Transaction;
