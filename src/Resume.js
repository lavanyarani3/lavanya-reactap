import React from 'react'
import data from './data/data'

import samsung from './samsung.png'
import cam from './cam.jfif'
import battery from './battery.png'
import storage from './storage.png'

export default function Resume(props)
{   
    let info=data.profile[props.location.data1.id];
   
  
   
 




	return(
    <div className="row justify-content-center" style={{background:"linear-gradient(to top, #ff00ff -104%, #ffffcc 100%)"}} >
     <div className="col-lg-5 col-md-5 col-sm-10 m-2 ">
      <div className="card text-center bg-light">
      <div className="card-body ">
          <h1>{info.details.name}</h1>
          <img src={samsung}/>
          
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
     <img src={cam} style={{width:"40%"}}/> 
     <br/>
     <br/>
     <h4 className="text-center text-warning">{info.details.special}</h4>
     <h5 className="text-center ">{info.details.cam}</h5>
          <br/>
     

     </div>
     </div>
     <br/>
     <div className="card">
     <div className="card-body">
     <h3 className="text-success">Battery</h3>
     <br/>
     <img src={battery} style={{width:"30%"}}/>
     <br/>
     <br/>
     <h4 className="text-center text-warning">{info.details.battery}</h4>
     <h5 className="text-center ">{info.details.bat}</h5>
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
     <h4 className="text-center text-warning">{info.details.ram}</h4>
     <h5 className="text-center ">{info.details.sto}</h5>

     <br/>
 
     </div>
     </div>
     <br/>
     <div className="card">
     <div className="card-body">
     <h4 className="text-center text-primary">{info.details.price}</h4>
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

