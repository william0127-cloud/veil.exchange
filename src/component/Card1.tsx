import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function OutlinedCard(props) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">
          <div style={{ transform: "translateY(-2.20236px) translateZ(0px)" }}>
            <img
              alt="Privacy Driven"
              loading="lazy"
              width="184"
              height="276"
              decoding="async"
              data-nimg="1"
              className="c-features__image m-auto d-block my-3 my-lg-4"
              style={{ color: "transparent" }}
              src={props.logo}
            />
          </div>
        </div>
        <div className="p-3 p-lg-4 card-body">
          <h3>{props.subtitle}</h3>
          <p className="text-muted mb-0">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
