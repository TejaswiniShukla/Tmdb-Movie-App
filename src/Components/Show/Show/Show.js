import React from 'react';
import { Link } from 'react-router-dom';
import "./Show.css"

const Show = ({ data }) => {

    const moviehub=data.map((m)=>{
    
    return <div key={m.id} className='body'>
        <img src={"https://image.tmdb.org/t/p/w500/"+m.poster_path} alt="" />
  <div className="card-body">
<h5 className="card-title">🌟{m.vote_average}</h5>
<p className="card-text">{m.name || m.original_title}</p>
<p>{m.first_air_date || m.release_date}</p>
</div>
</div>;
       
 })

  return <div className='text'>
       <div className='inp'>
       <input placeholder='🔎Search for a movie,tv show,person.....'></input>
       </div>
      <h2> What's Popular!!</h2>
      
     <div className='forrect'>
     
      {moviehub}
     
     </div> 
  </div>
};

export default Show;
 