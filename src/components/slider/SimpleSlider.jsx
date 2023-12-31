"use client";
import Image from "next/image";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Slider from "react-slick";
import slider1 from "../../../public/my-lang-ai-slider1.png";
import slider2 from "../../../public/my-lang-ai-slider2.png";
import slider3 from "../../../public/my-lang-ai-slider3.png";
import classes from "./simpleSlider.module.css";

const SimpleSlider = () => {
  const slider = React.useRef(null);
  const settings = {
    arrows: false,
    dots: true, // Sayfalama noktalarını gösterir
    speed: 1500,
    infinite: true, // Sonsuz döngü
    slidesToShow: 1, // Görünecek slayt sayısı
    slidesToScroll: 1, // Bir seferde kaydırılacak slayt sayısı
    autoplay: true, // Otomatik geçiş
    autoplaySpeed: 4000,
  };

  return (
    <div className={classes.container}>
      <div className={classes.buttonContainer}>
        <button onClick={() => slider?.current?.slickPrev()}>
          <AiOutlineArrowLeft />
        </button>
        <button onClick={() => slider?.current?.slickNext()}>
          <AiOutlineArrowRight />
        </button>
      </div>
      <Slider ref={slider} {...settings}>
        <div>
          <Image src={slider1} width="1560" height="500" />
        </div>
        <div>
          <Image src={slider2} width="1560" height="500" />
        </div>
        <div>
          <Image src={slider3} width="1560" height="500" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
