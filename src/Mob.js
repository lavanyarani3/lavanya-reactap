import React from 'react'
import data from './data/data'
import samsung from './samsung.jfif'
import cam1 from './cam1.jfif'
import mibat from './mibat.jfif'
import storage from './storage.png'
import redmi from './redmi.png'

export default function Mob(props)
{   
    let inf=data.profile[props.location.data2.id];
   
    
 
	return(
    <div className="row justify-content-center" style={{background:"linear-gradient(to top left, #ccffff 2%, #00cc99 100%)"}} >
     <div className="col-lg-5 col-md-5 col-sm-10 m-2 ">
      <div className="card text-center bg-light ">
      <div className="card-body ">
          <h1>{inf.details.name2}</h1>
          <img src={redmi}/>
          
      </div>
      </div>

      
     </div>
     <div className="col-lg-8 m-2 ">
     <div className="card bg-light">
     <div className="card-body">
     <div className="card">
     <div className="card-body">
     <h3 className="text-success"> Camera</h3>
     <br/>
     <img src={cam1} style={{width:"40%"}}/> 
     <br/>
     <br/>
     <h4 className="text-center text-warning">{inf.details.special2}</h4>
     <h5 className="text-center">{inf.details.cam2}</h5>
     <br/>
     
     </div>
     </div>
     <br/>
     <div className="card">
     <div className="card-body">
     <h3 className="text-success">Battery</h3>
     <br/>
     <img src={mibat} style={{width:"30%"}}/>
     <br/>
     <br/>
    <h4 className="text-center text-warning">{inf.details.battery2}</h4>
    <h5 className="text-center">{inf.details.bat2}</h5>
     <br/>
    
     </div>
     </div>
     <br/>
     <div className="card">
     <div className="card-body">
     <h3 className="text-success">Storage</h3>
     <br/>
     <img src={storage} style={{width:"30%"}}/>
     <br/>
     <br/>
     <h4 className="text-center text-warning">{inf.details.ram2}</h4>
     <h5 className="text-center">{inf.details.sto2}</h5>

     <br/>
     
     </div>
     </div>
     <br/>
     <div className="card">
     <div className="card-body">
     
     <h4 className="text-center text-primary">{inf.details.price2}</h4>
     <br/>
     <br/>
      <button className="btn btn-warning btn-outline-muted">Buy Now</button>
     </div>
     </div>
      
     </div>
     </div>

     </div>


    </div>


		)
}

