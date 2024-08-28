import React from 'react';

function Section4() {
  return (
    <div>
      <section className="section-4">
        <div className="left-div">
          <div className="small-img-div">
            <a href="#"><img src="./all img/10027.png" alt="Next level adventure image" /></a>
          </div>
          <div className="h2-img">
            <h2>Next level adventure</h2>
          </div>
          <div className="link-div">
            <ul>
              <li><a href="#"><p>Learn more &gt;</p></a></li>
              <li><a href="#"><p>Buy &gt;</p></a></li>
            </ul>
          </div>
        </div>
        <div className="right-div">
          <div className="rd">
            <div className="half-img-div">
              <a href="#"><img src="./all img/10032.png" alt="Spatial computing image" /></a>
            </div>
            <h2>Welcome to the era of spatial computing.</h2>
          </div>
          <div>
            <h2>Available early next year in the U.S.</h2>
          </div>
          <div>
            <ul>
              <li><a href="#">Learn more <i className="fa-solid fa-greater-than"></i></a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section4;
