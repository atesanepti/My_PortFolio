import React from "react";

const PriceCard = ({ data ,img}) => {
  const { type, message, price, services } = data;
  return (
    <div className="card">
      <img src={img} />
      <h3>{type}</h3>
      <span>{message}</span>
      <h2>{price}$</h2>
      <ul className="services">
        {services.map((service) => (
          <li key={Math.random()}>{service}</li>
        ))}
      </ul>
      <button className="btn">Hire Me</button>
    </div>
  );
};

export default PriceCard;
