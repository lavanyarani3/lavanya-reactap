import React from 'react';
import data from './data/data'

import sam from './sam.jfif'

import Resume from './Resume'
import {Link} from 'react-router-dom'

let Home=()=>
{   
   let card_details=data.profile;
   console.log(card_details);
  let resume={Resume}

 	return(
      // <h1 className="text-success">Cards</h1>

      <div className="row justify-content-center">
      
      {card_details.map((values,index)=>(
      	 <section className="col-lg-4 col-md-5 col-sm-10 mt-2" key={index}>
      	 <div className="card text-center">
          
      	 <article className="card-body">
      	 <img src={sam}/>
      


      	        <h4 className="text-secondary">{values.details.name}</h4>
      	       	
      	       	 
      	       	 <br/>
      	       	 <Link to={{pathname:'/Resume', data1:{id:index}}} className="btn btn-info">View details</Link>
          </article>

      	 </div>

      	 </section>
      	
      	
           
      	)

      	)}
         



      </div>




		);
      }

export default Home;