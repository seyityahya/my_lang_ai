import SimpleSlider from "@/components/slider/SimpleSlider";
import React from "react";
import styles from "./homePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <SimpleSlider />
    </div>
  );
};

export default HomePage;
