import axios from "axios";
import React, { useState, useEffect } from "react";


function RandomBeer() {
  const [randomBier, setRandomBier] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBier(response.data);
      });
  }, []);

  return (
    <div>
          <h1>Random Beer</h1>
         <img src={randomBier.image_url} alt="BIERR" />
          <p>{randomBier.name}</p>
          <p>{randomBier.tagline}</p>
          <p>{randomBier.first_brewed}</p>
          <p>{randomBier.attenuation_level}</p>
          <p>{randomBier.description}</p>
          <p>{randomBier.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
