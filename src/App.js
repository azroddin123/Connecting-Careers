import React, { useRef } from "react";
import "./App.css";
import Course from "./Course";
import Director from "./Director";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Placement from "./Placement";
import Reviews from "./Reviews";
import Section from "./Section";
import WhyChooseUs from "./WhyChooseUs";

function App() {
  // Create refs for each section
  const heroRef = useRef(null);
  const placementRef = useRef(null);
  const directorRef = useRef(null);
  const courseRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const reviewsRef = useRef(null);
  const sectionRef = useRef(null);

  return (
    <>
      <Navbar />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={placementRef}>
        <Placement />
      </div>
      <div ref={directorRef}>
        <Director />
      </div>
      <div ref={courseRef}>
        <Course />
      </div>
      <div ref={whyChooseUsRef}>
        <WhyChooseUs />
      </div>
      <div ref={reviewsRef}>
        <Reviews />
      </div>
      <div ref={sectionRef}>
        <Section
          heroRef={heroRef}
          placementRef={placementRef}
          directorRef={directorRef}
          courseRef={courseRef}
          whyChooseUsRef={whyChooseUsRef}
          reviewsRef={reviewsRef}
          sectionRef={sectionRef}
        />
      </div>
      <Footer />

      <div className="whatsapp-icon">
        <a
          href="https://wa.me/9822666114?text=Hello, I'm interested."
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/whatsapp.png" alt="WhatsApp" />
        </a>
      </div>
    </>
  );
}

export default App;
