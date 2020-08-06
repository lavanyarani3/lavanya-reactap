import React from 'react'
import data from './data/data'
import samsung from './samsung.jfif'
import icam from './icam.jfif'
import ibat from './ibat.jpg'
import istore from './istore.png'
import iphone from './iphone.png'


export default function Mob(props)
{   
    let infe=data.profile[props.location.data3.id];
   
    
 
	return(
    <div className="row justify-content-center" style={{background:"linear-gradient(to top left, #660066 -101%, #ccffff 100%)"}} >
     <div className="col-lg-5 col-md-5 col-sm-10 m-2 ">
      <div className="card text-center bg-light">
      <div className="card-body ">
          <h1>{infe.details.name3}</h1>
          <img src={iphone}/>
          
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
     <img src={icam} style={{width:"40%"}}/> 
     <br/>
     <br/>
     <h4 className="text-center text-warning">{infe.details.special3}</h4>
     <h5 className="text-center">{infe.details.cam3}</h5>
     <br/>
     
     </div>
     </div>
     <br/>
     <div className="card">
     <div className="card-body">
     <h3 className="text-success">Battery</h3>
     <br/>
     <img src={ibat} style={{width:"30%"}}/>
     <br/>
     <br/>
    <h4 className="text-center text-warning">{infe.details.battery3}</h4>
    <h5 className="text-center">{infe.details.bat3}</h5>
     <br/>
    
     </div>
     </div>
     <br/>
     <div className="card">
     <div className="card-body">
     <h3 className="text-success">Storage</h3>
     <br/>
     <img src={istore} style={{width:"30%"}}/>
     <br/>
     <br/>
     <h4 className="text-center text-warning">{infe.details.ram3}</h4>
     <h5 className="text-center">{infe.details.sto3}</h5>

     <br/>
     
     </div>
     </div>
     <br/>
     <div className="card">
     <div className="card-body">
     <h4 className="text-center text-primary">{infe.details.price3}</h4>
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
