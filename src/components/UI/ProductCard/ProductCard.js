import React, { useState, useEffect } from "react";
import { Card, Badge } from "react-bootstrap";

import "./ProductCard.css";
import { FaDollarSign } from "react-icons/fa";

export default function ProductCard(props) {
  return (
    <div>
      <Card className="main-card" onClick={props.onClick}>
        <Card.Img
          variant="top"
          src={props.item.thumbnail}
          className="card-img"
        />
        <Card.Body>
          <div className="bottom-div">
            <h6>{props.item.title}</h6>

            <Badge pill bg="warning" text="dark">
              <FaDollarSign className="mb-1" />
              {props.item.price}
            </Badge>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
