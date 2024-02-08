import React, { useEffect, useRef } from "react";
import Container from "./Container";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
// Client's Img
import client_1 from "../assets/imgs/client/client_1.jpg";
import client_2 from "../assets/imgs/client/client_2.jpg";
import client_3 from "../assets/imgs/client/client_3.jpg";
import client_4 from "../assets/imgs/client/client_4.jpg";
import client_5 from "../assets/imgs/client/client_5.jpg";
import client_6 from "../assets/imgs/client/client_6.jpg";
import ClientCard from "./ClientCard";
import useLargeScreen from "./../CustomHook/useLargeScreen";

const clientData = [
  {
    name: "Liam leo",
    comment:
      "I recently had the pleasure of working with the XYZ Company on the development of our new website.",
    rate: 4,
    img: client_1,
    platform: "fiver",
  },
  {
    name: "Noah Oliver",
    comment:
      "I am writing to express my satisfaction with the recent website redesign project conducted by ABC Agency.",
    rate: 5,
    img: client_2,
    platform: "upwork",
  },
  {
    name: "James Elijah",
    comment:
      "We recently collaborated with XYZ Web Solutions for our website development project, and the experience was exceptional.",
    rate: 4,
    img: client_3,
    platform: "fiver",
  },
  {
    name: "William Henry",
    comment:
      "Working with DigitalCraft Studios on our website was a breeze. The team's creativity, responsiveness, and attention to detail were impressive",
    rate: 4,
    img: client_4,
    platform: "upwork",
  },
  {
    name: "Lucas Benjamin",
    comment:
      "Our experience with WebWizards was fantastic. They created a sleek and user-friendly website that perfectly reflects our brand. ",
    rate: 4,
    img: client_5,
    platform: "upwork",
  },
  {
    name: "Theodore Mateo",
    comment: "TechBuilders exceeded our expectations in developing our website",
    rate: 5,
    img: client_6,
    platform: "freelancer",
  },
];

const ClientReview = () => {
  const cardContainer = useRef();
  const card = useRef();
  const isLarge = useLargeScreen(800);


  // Scroll Effect 


  const cardScroll = (type) => {
    cardContainer.current.scrollLeft +=
      type === "next"
        ? card.current.offsetWidth + 8
        : -(card.current.offsetWidth + 8);
  };

  return (
    <section id="client">
      <Container>
        <div className="section_title">
          <h3>Client Review</h3>
        </div>

        <div className="relative ">
          <div className="client_cards" ref={cardContainer}>
            {clientData.map((clientData) => (
              <ClientCard
                key={Math.random()}
                clientData={clientData}
                card={card}
              />
            ))}
          </div>
          {isLarge ? (
            <>
              {" "}
              <button
                type="btn"
                className="navigation_prev_btn"
                name="prev"
                onClick={() => cardScroll("prev")}
              >
                <span>
                  <FaLongArrowAltLeft />
                </span>
              </button>
              <button
                type="btn"
                name="next"
                className="navigation_next_btn"
                onClick={() => cardScroll("next")}
              >
                <span>
                  <FaLongArrowAltRight />
                </span>
              </button>
            </>
          ) : null}
        </div>
      </Container>
    </section>
  );
};

export default ClientReview;
