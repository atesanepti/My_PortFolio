import React, { useEffect } from "react";
import { IoMdStar } from "react-icons/io";
import useScrollEffect from "../CustomHook/scrollIntersection";
import useBlurLoad from "./../CustomHook/blurLoading";
const ClientCard = ({ clientData, card }) => {
  const { name, comment, rate, img, platform } = clientData;
  const { isLoaded, callback } = useBlurLoad();
  return (
    <div className="client_card card" ref={card}>
      <figure className={isLoaded ? "loaded " : null}>
        <img src={img} alt={name} title={name} onLoad={callback} loading="lazy" />
      </figure>
      <div className="client_card_content">
        <h4>{name}</h4>
        <span className="block mt-[-7px]">{platform}</span>
        <div className="flex justify-center items-center my-1 md:my-2">
          <div className="rate flex flex-col justify-center items-center p-2 ">
            <span className="text-base md:text-lg font-medium">{rate}</span>
            <div className={`rate_icon_${rate} flex  `}>
              <span className="text-xs md:text-sm">
                <IoMdStar />
              </span>
              <span className="text-xs md:text-sm">
                <IoMdStar />
              </span>
              <span className="text-xs md:text-sm">
                <IoMdStar />
              </span>
              <span className="text-xs md:text-sm">
                <IoMdStar />
              </span>
              <span className="text-xs md:text-sm">
                <IoMdStar />
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-2 ">
            <span className="text-base md:text-lg font-medium">
              {100 - (Math.random() * 51).toPrecision(1)}
            </span>
            <span className="text-xs md:text-sm">Project's</span>
          </div>
        </div>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default ClientCard;
