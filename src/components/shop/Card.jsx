import React from 'react';
import '../../scss/Card.scss';
const Card = ({ packageData }) => {

  const handleImageError = (e) => {
    e.target.style.display = 'none';
  };

  return (
        <div className="col-12 px-3">
          <div className="pb-4">
            <div className="strip white"></div>
            <div className="row py-3">
              <div className="col-12 col-md-2 d-flex justify-content-start justify-content-md-center align-items-md-center">
                <img 
                  src={`${packageData.image}?random=${packageData.store_id}`} 
                  alt="Package Icon" 
                  className="img-fluid" 
                  style={{ width: '150px', height: '150px', objectFit: 'contain' }}
                  onError={handleImageError}
                />
              </div>
              <div className="col-12 col-md-10 col-lg-7">
                <div className="card-title fw-bold fs-1">{packageData.title}</div>
                <p className="card-text packet-price fs-4"><strong>{packageData.maxPrice}$ / {packageData.minPrice}$</strong></p>
                <p className="features-package fs-4"><strong> Unlimited Features </strong></p>
                <p className="card-text text-package">
                 {packageData.description}
                </p>
              </div>
              <div className="col-12 col-lg-3 d-flex flex-column justify-content-lg-center pt-3">
                <a href={``} className="oval-btn text-center">START WINNING</a>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Card;
