import React from 'react';

const Carrosel = ({...props}) => {
  return (
    <div
      id="carouselExampleRide"
      className="carousel slide"
      data-bs-ride="true"
    >
      <h3 className='ms-3 mb-3 cor-3 title'>{props.title}</h3>
      <div className="carousel-inner rounded shadow">
        <div className="carousel-item active">
          <img  src={props.image1} className="d-block w-100" alt={props.alt1} />
        </div>
        <div className="carousel-item">
          <img  src={props.image2} className="d-block w-100" alt={props.alt2} />
        </div>
        <div className="carousel-item">
          <img  src={props.image3} className="d-block w-100" alt={props.alt3} />
        </div>

       
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrosel;
