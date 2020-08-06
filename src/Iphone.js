import React from 'react'
import date from './data/data'
import {Link} from 'react-router-dom'
import i from './i.jpg'
import Iph from './Iph'

let Iphone=()=>
{
	let card_detai=date.profile;
	console.log(card_detai);
	


	return(
             <div className="row justify-content-center">
             {card_detai.map((value,index)=>(

              <section className="col-lg-4 col-md-5 col-sm-10 mt-2" key={index}>
      	      <div className="card text-center">
      	       
            
      	       <article className="card-body">
      	       <img src={i}/>
      	       <br/>
      	       <br/>
      
      	        <h4 className="text-secondary">{value.details.name3}</h4>
      	       	
      	       	 
      	       	 <br/>
      	       	 <Link to={{pathname:'/Iph', data3:{id:index}}} className="btn btn-info">View details</Link>
          </article>

      	 </div>

      	 </section>
      	
      	
           
      	)

      	)}
         



      </div>




		);
      }

export default Iphone;