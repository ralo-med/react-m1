import React from "react";
import { useParams } from "react-router-dom";

function Coin() {
  const { coinId } = useParams(); //-dom v6
  return <h1>Coin: {coinId}</h1>;
}

export default Coin;
