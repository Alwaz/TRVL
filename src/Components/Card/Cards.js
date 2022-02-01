import React from "react";
import "./Cards.css";
import CardsItem from "./CardsItem";

const Cards = () => {
  return (
    <>
      <div className="cards">
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardsItem
                src="../../../images/img-7.jpg"
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/services"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
