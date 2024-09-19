import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Img1 from './assets/img1.jpg';
import Img2 from './assets/img2.jpg';
import Img3 from './assets/img3.jpeg';
import Img4 from './assets/img4.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider1() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="box">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
     
        <SwiperSlide className="content-box">

          <img src={Img1} alt="Slide 1" />
          <img src={Img2} alt="Slide 2" />
          <img src={Img3} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide className="content-box">
          <img src={Img2} alt="Slide 4" />
          <img src={Img3} alt="Slide 5" />
          <img src={Img4} alt="Slide 6" />
        </SwiperSlide>
        <SwiperSlide className="content-box">
          <img src={Img2} alt="Slide 4" />
          <img src={Img3} alt="Slide 5" />
          <img src={Img4} alt="Slide 6" />
        </SwiperSlide>
        <SwiperSlide className="content-box">
          <img src={Img2} alt="Slide 4" />
          <img src={Img3} alt="Slide 5" />
          <img src={Img4} alt="Slide 6" />
        </SwiperSlide>
        <SwiperSlide className="content-box">
          <img src={Img2} alt="Slide 4" />
          <img src={Img3} alt="Slide 5" />
          <img src={Img4} alt="Slide 6" />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
