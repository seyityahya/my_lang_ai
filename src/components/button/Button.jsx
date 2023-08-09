import React from "react";
import styles from "./button.module.css";

const Button = ({ text }) => {
  return (
    <div className={styles.container}>
      <h6>{text}</h6>
    </div>
  );
};

export default Button;
