import React from "react";
import Container from "./Container";
import PriceCard from "./PriceCard";
import data from "../../public/data/price_table.json";

// #Img Import 
import full_work_img from "../assets/imgs/price_table_1.png";
import fixed_work_img from "../assets/imgs/price_table_2.png";
import hourley_work_img from "../assets/imgs/price_table_3.png";

const Price = () => {
    const imgs = [full_work_img,fixed_work_img,hourley_work_img]
  return (
    <section id="price">
      <Container>
        <div className="section_title">
          <h3>Price Table</h3>
        </div>
        <div className="cards">
          {data.map((data,index) => (
            <PriceCard key={Math.random()} data={data} img={imgs[index]}  />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Price;
