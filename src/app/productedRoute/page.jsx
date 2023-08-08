"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Profile from "../profile/page";

const ProductedProfile = () => {
  const router = useRouter();
  const loggedIn = false;
  return (
    <>
      {loggedIn === true && router.push("/profile")}
      {loggedIn === false && router.push("/login")}
    </>
  );
};

export default ProductedProfile;
