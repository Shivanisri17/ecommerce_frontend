import React from "react";
import Products from "./Products";
const Home = ()=>{
    return(
      
      < div className="hero">

<>

<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
   
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="card text border-0">
      <img src="assest/R.jpg" class="d-block1 w-100"   alt="..."/>
        <div className="card-img-overlay">
          <div className="container">
           <h5 className="card-title1 display-4 fw-bolder mb-0">
              NEW SEASON ARRIVALS
              </h5>
          <p className="card-text1 lead fs-2">
          CHECK OUT ALL THE TRENDS!
              </p>
              
         </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <div className="card text border-0">
      <img src="assest/s.jpg" class="d-block1  w-100" alt="..."/>
        <div className="card-img-overlay">
          <div className="container">
           <h5 className="card-title2 display-4 fw-bolder mb-0">
             DEALS ON TOP BRANDS
              </h5>
          <p className="card-text2 lead fs-2">
          SHOP NOW LATEST TRENDS!
              </p>
              
         </div>
        </div>
      </div>
    </div>

    <div class="carousel-item">
    <div className="card text border-0">
      <img src="assest/q.jpg" class="d-block h-100 w-100" alt="..."/>
        <div className="card-img-overlay">
          <div className="container">
           <h5 className="card-title3 display-4 fw-bolder mb-0">
              MINIMUM 70% OFF
              </h5>
          <p className="card-text3 lead fs-2">
                STYLIST AND TRADITIONAL JEWELS!
              </p>
              
         </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <div className="card text border-0">
      <img src="assest/t.jpg" class="d-block2 w-100" alt="..."/>
        <div className="card-img-overlay">
          <div className="container">
           <h5 className="card-title4 display-4 fw-bolder mb-0">
             BEST SELLING ELECTRONICS
              </h5>
          <p className="card-text4 lead fs-2">
              WOW SALE  DEALS UPTO 40% OFF!
              </p>
              
         </div>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>






</>

<Products />

</div>
    )
}

export default Home;