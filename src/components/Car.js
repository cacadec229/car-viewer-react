import React from 'react';
import { Link } from 'react-router-dom';
import carimage from '../assets/carsphoto.jpeg';

const Car = ({ car }) => {
  const { modelname, description } = car.attributes;
  const { id } = car;
  return (
    <div className="col-md-4">
      <Link
        to={`/cars/${id}`}
      >
        <div className="card">
          <img src={carimage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{modelname}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Car;
