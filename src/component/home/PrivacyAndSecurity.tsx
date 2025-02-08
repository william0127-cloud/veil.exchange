import * as React from "react";
import Card from "../Card1.tsx";

export default function PrivacyAndSecurity(props) {
  return (
    <div className="my-4 my-lg-5 py-4 py-lg-5 position0relative container">
      <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
        <h2 className="h1 text-gradient text-center position-relative z-3 d-inline">
          We are all about privacy and security
        </h2>
      </div>
      <div className="row-cols-1 row-cols-md-1 row-cols-lg-3 gy-3 gy-lg-0 gx-0 gx-lg-4 position-relative z-3 row">
        {props.cardData.map((card, index) => {
          return (
            <Card
              subtitle={card.subtitle}
              description={card.description}
              logo={card.logo}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}
