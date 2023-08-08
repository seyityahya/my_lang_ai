import Image from "next/image";
import React from "react";
import styles from "./login.module.css";
import loginImage from "../../../public/login-screen.png";
import Button from "@/components/button/Button";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.up}>
        <Image src={loginImage} width="121" height="94" />
        <h5>For free, join now and start learning</h5>
      </div>
      <div className={styles.input}>
        <div className={styles.email}>
          <p>Email Address</p>
          <input type="email" placeholder="email address" />
        </div>
        <div className={styles.password}>
          <p>Password</p>
          <input type="password" placeholder="password" />
        </div>
        <button>Forgot Password</button>
      </div>
      <Button />
    </div>
  );
};

export default Login;
