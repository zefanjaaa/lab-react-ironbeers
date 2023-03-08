import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setbrewersTips] = useState("");
  const [attenuationLevel, setAttenuationlevel] = useState(1);
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };
      
      axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body)
          .then((response) => {
              setName('')
              setTagline('')
              setDescription('')
              setFirstBrewed('')
              setbrewersTips('')
              setAttenuationlevel(1)
              setContributedBy('')
              alert('New beer created!')
              navigate('/')
              
      })
  };

  return (
    <div>
          <h1>Add a new beer!</h1>
          <form onSubmit={handleSubmit}>
              
              <label> Name</label>
              <input type="text" onChange={(event) => setName(event.target.value)} name='name' value={name} />

              <label> Tagline</label>
              <input type="text" onChange={(event) => setTagline(event.target.value)} name='tagline' value={tagline} />

              <label> Description</label>
              <input type="text" onChange={(event) => setDescription(event.target.value)} name='description' value={description} />

              <label> First Brewed</label>
              <input type="text" onChange={(event) => setFirstBrewed(event.target.value)} name='firstbrewed' value={firstBrewed} />

              <label> Brewers tips</label>
              <input type="text" onChange={(event) => setbrewersTips(event.target.value)} name='brewersTips' value={brewersTips} />

              <label> Attenuation level</label>
              <input type="number" onChange={(event) => setAttenuationlevel(event.target.value)} name='attenuationlevel' value={attenuationLevel} />

              <label> Contributed by</label>
              <input type="text" onChange={(event) => setContributedBy(event.target.value)} name='contributedBy' value={contributedBy} />

              <button type="submit"> Create new beer!</button>
          </form>
    </div>
  );
}

export default NewBeer;
