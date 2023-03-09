import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeers() {
  const [foundBeer, setFoundBeer] = useState([]);

    const [query, setQuery] = useState("");
    

    //First useEffect to load the data
    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
          
          setFoundBeer(response.data);
        });
      }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
  };

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
            .then((value) => {
            setFoundBeer(value.data)
        })
 },[query])

  


  return (
    <div>
      <h2>Search for a beer</h2>
      <form onChange={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
          </form>
      

          <h1>AllBeers</h1>
          {!foundBeer && <h1>LOAAAADINGG</h1>}
      {foundBeer && (foundBeer.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url} alt="beerimage"></img>
          <Link to={`/BeerInfo/${beer._id}`}>
            <p>
              <b>{beer.name}</b>
            </p>
          </Link>
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
        </div>
      )))}
    </div>
  );
}

export default AllBeers;
