import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BeerInfo() {
  const [bierInfo, setBierInfo] = useState([]);
  const [foundBier, setFoundBier] = useState(null);

  const { beerId } = useParams();

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBierInfo(response.data);
    });
  }, []);

  useEffect(() => {
    const beer = bierInfo.find((oneBier) => {
      return oneBier._id === beerId;
    });
    if (beer) {
      setFoundBier(beer);
    }
  }, [beerId, bierInfo]);

  return (
    <div>
      <h1>Beer information</h1>
      {foundBier && (
        <>
          <img src={foundBier.image_url} alt="BIER" />
          <h2>{foundBier.name}</h2>
          <p>{foundBier.tagline}</p>
          <p>{foundBier.first_brewed}</p>
          <p>{foundBier.attenuation_level}</p>
          <p>{foundBier.description}</p>
          <p>{foundBier.contributed_by}</p>
        </>
      )}
    </div>
  );
}

export default BeerInfo;
