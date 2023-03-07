import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AllBeers(props) {
    const [foundBeer, setFoundBeer] = useState([])
    
    
    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                // console.log("This is the data ==>",response.data)
                setFoundBeer(response.data)
            })
    }, [])
    return (
        <div>
            <h1>AllBeers</h1>
            {foundBeer.map((beer) => (
                <div key={beer._id}>
                    <img src={beer.image_url} alt="beerimage"></img>
                    <Link to={`/BeerInfo/${beer._id}`}>
                        <p><b>{beer.name}</b></p>
                        </Link>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
              </div>
          ))}

      </div>
  )
}

export default AllBeers