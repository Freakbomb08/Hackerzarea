import React from "react";
import Slider from "react-slick";
import pic1 from './assets/arth.jpg';
import pic2 from './assets/arthur.jpg';
import pic3 from './assets/carr.jpg';
import pic4 from './assets/car2.jpg';
import pic5 from './assets/car3.jpg';
import pic6 from './assets/dog.jpg';

const slider = [
  {
    name: "Arthur",
    image: pic1,
    message: "I recently joined a hackathon through this site, and it was seamless! From easy registration to team formation, everything was well-organized. A must-use for developers seeking engaging events!",
  },
  {
    name: "Arthur",
    image: pic2,
    message: "I recently joined a hackathon through this site, and it was seamless! From easy registration to team formation, everything was well-organized. A must-use for developers seeking engaging events!",
  },
  {
    name: "Arthur",
    image: pic3,
    message: "I recently joined a hackathon through this site, and it was seamless! From easy registration to team formation, everything was well-organized. A must-use for developers seeking engaging events!",
  },
  {
    name: "Arthur",
    image: pic4,
    message: "I recently joined a hackathon through this site, and it was seamless! From easy registration to team formation, everything was well-organized. A must-use for developers seeking engaging events!",
  },
  {
    name: "Arthur",
    image: pic5,
    message: "I recently joined a hackathon through this site, and it was seamless! From easy registration to team formation, everything was well-organized. A must-use for developers seeking engaging events!",
  },
  {
    name: "Arthur",
    image: pic6,
    message: "I recently joined a hackathon through this site, and it was seamless! From easy registration to team formation, everything was well-organized. A must-use for developers seeking engaging events!",
  },
];

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-prev" onClick={onClick}>
      &#10094;
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-next" onClick={onClick}>
      &#10095;
    </button>
  );
};

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="box-2">
      <h2 className="testimonial-title">What Our Participants Are Saying</h2>
      <div className="slider">
        <Slider {...settings}>
          {slider.map((sliders, index) => (
            <div key={index} className="testimonial-card">      
              <p className="testimonial-message">{sliders.message}</p>
              <div className="testimonial-footer">
                <img src={sliders.image} alt={sliders.name} className="testimonial-image" />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{sliders.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
