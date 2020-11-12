import React from "react";
import { CardHeader } from "../card-header/CardHeader";
import Spinner from "../Spinner/spinner.component";
import Card from "../card/card.component";

import "./card-container.style.scss";

const CardContainer = ({ data, numberOfElements, category, ...otherProps }) => {
  return data.length === 0 ? (
    <div className="container">
      <CardHeader
        title={otherProps.title}
        option1={otherProps.option1}
        option2={otherProps.option2}
        option3={otherProps.option3}
        option4={otherProps.option4}
      />
      <Spinner />
    </div>
  ) : (
    <div className="container">
      <CardHeader
        title={otherProps.title}
        option1={otherProps.option1}
        option2={otherProps.option2}
        option3={otherProps.option3}
        option4={otherProps.option4}
      />
      <div className="card-container">
        {data.length > 0 &&
          data
            .slice(0, numberOfElements)
            .map((cardData) => (
              <Card key={cardData.id} {...cardData} category={category} />
            ))}
      </div>
    </div>
  );
};

export default CardContainer;
