import React from "react";
import AllBeers from "../assets/beers.png";
import NewBeer from "../assets/new-beer.png";
import RandomBeer from "../assets/random-beer.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <div>
        <img src={AllBeers} alt="allbeer" />
        <Link to={"/beers"}>
          <h3>All beers</h3>
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          illum ab, tempore veritatis esse voluptatibus quia deleniti. Nisi,
          magnam tempore.
        </p>
      </div>
      <div>
        <img src={NewBeer} alt="newbeer" />
        <Link to={"/newbeer"}>
          <h3>New beer</h3>
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          illum ab, tempore veritatis esse voluptatibus quia deleniti. Nisi,
          magnam tempore.
        </p>
      </div>
      <div>
        <img src={RandomBeer} alt="randombeer" />
        <Link to={"/randombeer"}>
          <h3>Random beer</h3>
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          illum ab, tempore veritatis esse voluptatibus quia deleniti. Nisi,
          magnam tempore.
        </p>
      </div>
    </div>
  );
}

export default Homepage;
