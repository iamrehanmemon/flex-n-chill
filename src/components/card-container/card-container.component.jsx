import React from "react";
import Card from "../card/card.component";

import "./card-container.style.scss";

const CardContainer = ({ data, numberOfElements }) => {
  return (
    <div className="container">
      <div className="card-container">
        {data.length > 0 &&
          data
            .slice(0, numberOfElements)
            .map((cardData) => <Card key={cardData.id} {...cardData} />)}
      </div>
    </div>
  );
};

export default CardContainer;
