import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeers(props) {
  const [foundBeer, setFoundBeer] = useState([]);
//   const [result, setResult] = useState('');
    const [query, setQuery] = useState("");
    

    //First useEffect to load the data
    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
          // console.log("This is the data ==>",response.data)
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
          {/* {query && (result.map((bier) => (
              <div key={bier._id}>
              <p><b>Name of the beer:</b>{bier.name}</p>
                  <img src={bier.image_url} alt="BIER" />
              </div>
          )))} */}

      <h1>AllBeers</h1>
      { (foundBeer.map((beer) => (
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
