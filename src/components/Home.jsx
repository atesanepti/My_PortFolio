import React from "react";
import Header from "./Header";
import HomeContent from "./HomeContent";
import Container from "./Container";

const Home = () => {
  return (
    <section id="home">
      <Header />
      <Container>
        <HomeContent />
      </Container>
    </section>
  );
};

export default Home;
