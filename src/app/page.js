"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import splash from "../../public/splash.png";
import Navbar from "@/components/navbar/Navbar";
import HomePage from "./homePage/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.splash}>
          <Image src={splash} alt="splash" />
          <h1>Language App</h1>
        </div>
      ) : (
        <div className={styles.content}>
          <Navbar />
          <HomePage />
        </div>
      )}
    </div>
  );
}
