import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Course.css";
import { Pagination } from "swiper/modules";
import { Container, Button } from "react-bootstrap";

const Course = () => {
  return (
    <>
      <div className="py-5 mt-3">
        <h1 className="hading">
          <span style={{ color: "red" }}>C</span>ourse{" "}
          <span style={{ color: "red" }}>D</span>etails
        </h1>
        <div className="building-strong-connections">
          Comprehensive Modules Designed to Equip You with Industry-Ready Skills
        </div>
      </div>
      <Container fluid className="course-container">
        <Container>
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mt-5"
          >
            <SwiperSlide>
              <div className="course-card">
                <img
                  src="calender.png"
                  alt="Hovered Image"
                  className="hover-image"
                />
                <h4 className="course-normal-heading firstheading">
                  <span className="red">100%</span>
                  <span className="classroom-training1">
                    {" "}
                    classroom training
                  </span>
                </h4>
                <h2 className="course-big-heading">
                  Professional Digital Marketing Program
                </h2>
                <p className="course-description">
                  Learn from industry experts about digital marketing through
                  classroom training from scratch to become a digital marketing
                  master. &nbsp;
                  <a
                    href="https://wa.me/9822666114?text=Hello, I'm interested."
                    className="apply-now-link"
                  >
                    Apply Now
                  </a>
                </p>
                <a
                  href="https://wa.me/9822666114?text=Hello, I'm interested."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="course-button">
                    <span className="original-price">Rs 1,00,000/-</span>{" "}
                    <strong>Rs 66,000/-</strong> + Taxes
                  </Button>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="course-card">
                <img
                  src="upcoming.png"
                  alt="Hovered Image"
                  className="hover-image"
                />
                <h4 className="course-normal-heading">
                  {" "}
                  <span className="red">100%</span>
                  <span className="classroom-training1">
                    {" "}
                    classroom training
                  </span>
                </h4>
                <h2 className="course-big-heading">
                  Professional Digital marketing Program for Business Owner
                </h2>
                <p className="course-description">
                  This is the perfect course for business owners who want to
                  become big brands with a unique approach. then this course for
                  you. &nbsp;
                  <a
                    href="https://wa.me/9822666114?text=Hello, I'm interested."
                    class="apply-now-link"
                  >
                    Apply Now
                  </a>
                </p>
                <a
                  href="https://wa.me/9822666114?text=Hello, I'm interested."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" className="course-button">
                    <span className="original-price">Rs 1,50,000/-</span>{" "}
                    <strong>Rs 1,10,000/-</strong> + Taxes
                  </Button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course-card">
                <img
                  src="upcoming.png"
                  alt="Hovered Image"
                  className="hover-image"
                />
                <h4 className="course-normal-heading">
                  {" "}
                  <span className="red">100%</span>
                  <span className="classroom-training1">
                    {" "}
                    classroom training
                  </span>
                </h4>
                <h2 className="course-big-heading">
                  Professional Digital marketing Program for Startup owners
                </h2>
                <p className="course-description">
                  If you are a startup owner and you want to establish your
                  business presence online, then this digital marketing course
                  is structured by industry experts only for you. &nbsp;
                  <a
                    href="https://wa.me/9822666114?text=Hello, I'm interested."
                    class="apply-now-link"
                  >
                    Apply Now
                  </a>
                </p>
                <a
                  href="https://wa.me/9822666114?text=Hello, I'm interested."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" className="course-button">
                    <span className="original-price">Rs 1,00,000/-</span>{" "}
                    <strong>Rs 86,000/-</strong> + Taxes
                  </Button>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="course-card">
                <img
                  src="upcoming.png"
                  alt="Hovered Image"
                  className="hover-image"
                />
                <h4 className="course-normal-heading">
                  {" "}
                  <span className="red">100%</span>
                  <span className="classroom-training1">
                    {" "}
                    classroom training
                  </span>
                </h4>
                <h2 className="course-big-heading">
                  Professional Digital marketing Program for Growing Celebrities
                </h2>
                <p className="course-description">
                  If you are a growing celebrity looking for the perfect course
                  to upskill and boost your knowledge in digital marketing
                  modules and level in your professional career, then this
                  course is for you. &nbsp;
                  <a
                    href="https://wa.me/9822666114?text=Hello, I'm interested."
                    class="apply-now-link"
                  >
                    Apply Now
                  </a>
                </p>
                <a
                  href="https://wa.me/9822666114?text=Hello, I'm interested."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" className="course-button">
                    <span className="original-price">Rs 1,00,000/-</span>{" "}
                    <strong>Rs 96,000/-</strong> + Taxes
                  </Button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course-card">
                <img
                  src="upcoming.png"
                  alt="Hovered Image"
                  className="hover-image"
                />
                <h4 className="course-normal-heading">
                  {" "}
                  <span className="red">100%</span>
                  <span className="classroom-training1">
                    {" "}
                    classroom training
                  </span>
                </h4>
                <h2 className="course-big-heading">
                  Professional Digital marketing Program for Influencers
                </h2>
                <p className="course-description">
                  If you are a growing influencer and not able to manage your
                  social media handles professionally, then this course is for
                  you. &nbsp;
                  <a
                    href="https://wa.me/9822666114?text=Hello, I'm interested."
                    class="apply-now-link"
                  >
                    Apply Now
                  </a>
                </p>
                <a
                  href="https://wa.me/9822666114?text=Hello, I'm interested."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" className="course-button">
                    <span className="original-price">Rs 1,00,000/-</span>{" "}
                    <strong>Rs 76,000/-</strong> + Taxes
                  </Button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course-card">
                <img
                  src="upcoming.png"
                  alt="Hovered Image"
                  className="hover-image"
                />
                <h4 className="course-normal-heading">
                  {" "}
                  <span className="red">100%</span>
                  <span className="classroom-training1">
                    {" "}
                    classroom training
                  </span>
                </h4>
                <h2 className="course-big-heading">
                  Professional Digital marketing Program for Working
                  professional
                </h2>
                <p className="course-description">
                  This is a brief description or paragraph about the course or
                  content you're showcasing in this card. &nbsp;
                  <a
                    href="https://wa.me/9822666114?text=Hello, I'm interested."
                    class="apply-now-link"
                  >
                    Apply Now
                  </a>
                </p>
                <a
                  href="https://wa.me/9822666114?text=Hello, I'm interested."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" className="course-button">
                    <span className="original-price">Rs 1,00,000/-</span>{" "}
                    <strong>Rs 86,000/-</strong> + Taxes
                  </Button>
                </a>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlide components as needed */}
          </Swiper>
        </Container>
      </Container>
    </>
  );
};

export default Course;
