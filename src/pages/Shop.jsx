import React from 'react';
import { Layout } from '../components/layout/components';
import { useParams } from 'react-router-dom';
import { dataShop } from '../data-shop';
import  MyBarChart  from '../components/shop/MyBarChart';
function Shop() {

 const { storeId } = useParams(); // Получаем параметр storeId из URL
 const store = dataShop.find(shop => shop.store_id === parseInt(storeId));

 if (!store) {
   return <div>Store not found</div>; // Обработка случая, если магазин не найден
 }

  return (
    <Layout>
 <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md-6 mb-4 order-2 order-md-1">
          <div className="card shadow-sm border-1">
            <div className="card-body p-4">
              <div className="card-title mb-4 text-center fw-bold fs-4">Stats</div>
              <MyBarChart
                  maxPrice={store.maxPrice}
                  minPrice={store.minPrice}
                  numberOfCustomers={store.numberOfCustomers}
                />
            </div>
          </div>
        </div>

        {/* Package Details Section */}
        <div className="col-12 col-md-6 mb-4 order-1 order-md-2">
          <div className="card shadow-sm border-1">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-4">
                <div className="fw-bold fs-4 mb-0 me-3">Details</div>
                <div id="package-icon-container">
                  <img 
                    src={store.image}
                    alt="Package Icon" 
                    className="img-fluid" 
                    style={{ width: '50px', height: '50px', objectFit: 'contain' }} 
                    onError={(e) => e.target.parentElement.style.display = 'none'}
                  />
                </div>
              </div>
              <div className="card-title text-primary fs-2 fw-bold">{store.title}</div>
              <p className="card-text">{store.description}</p>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <p><strong>Max Price:</strong> {store.maxPrice}$</p>
                <p><strong>Min Price:</strong> {store.minPrice}$</p>
                <p><strong>Rating:</strong> {store.rating}</p>
                <p><strong>Number of Customers:</strong> {store.numberOfCustomers}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default Shop;
