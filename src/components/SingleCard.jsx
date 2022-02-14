import React from "react";
import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleCLick = () => {
      if(!disabled) {
        handleChoice(card)
      }
    }

  return (
    <div className="card">
      <div className= {flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="frente da carta" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={handleCLick}
          alt="parte de trás da carta"
        />
      </div>
    </div>
  );
}
