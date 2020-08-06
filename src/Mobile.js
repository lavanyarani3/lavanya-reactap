import React from 'react'
import date from './data/data'
import {Link} from 'react-router-dom'
import note from './note.jpg'
import Mob from './Mob'


let Mobile=()=>
{
	let card_detail=date.profile;
	console.log(card_detail);
	


	return(
             <div className="row justify-content-center">
             {card_detail.map((value,index)=>(

              <section className="col-lg-4 col-md-5 col-sm-10 mt-2" key={index}>
      	      <div className="card text-center">
      	       
            
      	       <article className="card-body">
      	       <img src={note}/>
      	       <br/>
      	       <br/>
      
      	        <h4 className="text-secondary">{value.details.name2}</h4>
      	       	
      	       	 
      	       	 <br/>
      	       	 <Link to={{pathname:'/Mob', data2:{id:index}}} className="btn btn-info">View details</Link>
          </article>

      	 </div>

      	 </section>
      	
      	
           
      	)

      	)}
         



      </div>




		);
      }

export default Mobile;