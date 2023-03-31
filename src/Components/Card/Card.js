import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../img/img_avatar1.png';

const Card = (props) => {
  return (
    <>
<div class="container-flow bg-primary">
<h2 className='text-center text-light' >THE SEVEN DEADLY SINS</h2>
<div class='row'>
    <div class='col-lg-5'></div>
    <div class='col-lg-2 text-center'>
        <div class="active-pink-3 active-pink-4 mb-4">
            <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
        </div>
    </div>
    <div class='col-lg-5'></div>
</div>
    <div class="row">
    <div class="col-lg-3">    
  {/* <p>Image at the top (card-img-top):</p> */}
  <div class="card">
  <img class="card-img-top" src={img1} alt="Card image"/>
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
  </div>
  </div>  

    </div> 
    <div class="col-lg-3">
    {/* <p>Image at the top (card-img-top):</p> */}
    <div class="card">
  <img class="card-img-top" src={img1} alt="Card image"/>
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
  </div>
  </div>  
    </div> 
    <div class="col-lg-3">
    {/* <p>Image at the top (card-img-top):</p> */}
    <div class="card">
  <img class="card-img-top" src={img1} alt="Card image"/>
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
  </div>
  </div>  

    </div>
    <div class="col-lg-3">
    {/* <p>Image at the top (card-img-top):</p> */}
    <div class="card">
  <img class="card-img-top" src={img1} alt="Card image"/>
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
  </div>
  </div>  
    </div>
    </div>
  <br/>  
  </div> 

    </>
  )
}
export default Card;

