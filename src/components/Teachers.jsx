import React from "react";
import Container from "./Container";

// ##Swipper Component and Style
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// #Teacher images
import anisulIslamImg from "../assets/imgs/anisul_islam.png";
import sumiSahaImg from "../assets/imgs/sumit_saha.png";
import hmNayemImg from "../assets/imgs/hm_nayem.jpg";
import TeachersCard from "./TeachersCard";

// #Teachers Data
const teachersData = [
  {
    name: "anisul islam",
    text: "He is an enthusiastic software developer, having expertise in web application development.Highly interested in Web development, Software development.",
    img: anisulIslamImg,
    channel: "Anisul Islam",
    channelLink: "https://www.youtube.com/@anisul-islam",
  },
  {
    name: "sumit saha",
    text: "He established Analyzen in 2008 while he was a student at Bangladesh University of Engineering & Technology (BUET). Analyzen has since become a top-tier Web and Mobile Application Development firm and the first Digital and Social Media Marketing Agency in Bangladesh",
    img: sumiSahaImg,
    channel: "Learn With Sumit",
    channelLink: "https://www.youtube.com/@LearnwithSumit",
  },
  {
    name: "HM nayem",
    text: "Hasan is an accomplished full-stack (MERN) web application developer, cloud practitioner, competitive coder, entrepreneur, and educator who constantly looks for new challenges to tackle in the real world",
    img: hmNayemImg,
    channel: "Stack Learner",
    channelLink: "https://www.youtube.com/@StackLearner",
  },
];

const Teachers = () => {
  return (
    <section id="teachers">
      <Container>
        <div className="section_title">
          <h3>My Teachers</h3>
        </div>
        <Swiper
          dir="rtl"
          navigation={false}
          spaceBetween={50}
          loop
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {teachersData.map((teacherData) => (
            <SwiperSlide key={Math.random()}>
              <TeachersCard teacherData={teacherData} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Teachers;
