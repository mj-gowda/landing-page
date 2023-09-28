"use client"
import React, { useState, useEffect } from 'react';


const HeroSection = () => {
  const images = [
    './hero1.png',
    './hero2.png',
    './hero3.png',
    // Add more image paths as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change the interval time (in milliseconds) as needed

    return () => {
      clearInterval(intervalId);
    };
  }, [])

  return (
    <section id="herosection">
        <div className="carousel-container">
            <div className="carousel" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {images.map((image, index) => (
                <img
                key={index}
                className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                src={image}
                alt={`Slide ${index + 1}`}
                />
            ))}

            </div>
            <div className="carousel-content">
                <div className="container">
                    <div className="logo-container">
                    <img src="./Union.png" alt="Logo" />
                    <div className="logo-text">LOGO</div>
                </div>
                <div className="content">
                <div className="background">
                    <div className="title">Lorem ipsum dolor sit amet</div>
                    </div>
                    <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                <div className="scroll-container">
                    <div className="scroll-text">scroll</div>
                    <div className="scroll-indicator"></div>
                </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;