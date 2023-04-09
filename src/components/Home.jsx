import React from 'react';
import './Header.css';


const Home = () => {
  return(
    <div>
     {/* <h2 className="text-center">Homepage</h2> */}
     {/* <p className="text-center">Welcome to our blogging site! We are thrilled to have you here. Our site is all about sharing and discovering interesting ideas, stories, and insights. Whether you are a seasoned writer or just starting out, we invite you to join our community of passionate bloggers.</p>

<p className="text-center">Explore our site to discover a wide range of topics, including technology, lifestyle, culture, health, and more. We believe that everyone has a unique perspective to share, and we encourage our writers to express themselves freely and authentically.</p>

<p className="text-center">As a member of our community, you can create your own blog, share your thoughts and ideas, and engage with other bloggers through comments and discussions. We also offer resources and tips to help you improve your writing skills and build your audience.</p>

<p  className="text-center">So what are you waiting for? Start exploring our site and become a part of our vibrant community of bloggers. We can't wait to see what you create!</p> */}

<div id="carouselExampleIndicators" class="carousel" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://www.hotbeautyhealth.com/wp-content/uploads/2016/02/start-a-lifestyle-blog.jpg" alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h5 className='text'>Lifestyle Blogging</h5>
    <p className='text'>Host your own lifestyle blog here!</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2022/09/brand_identity.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2022/09/brand_identity.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
  )
};

export default Home;
