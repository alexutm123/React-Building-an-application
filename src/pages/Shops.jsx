import React, { useState } from 'react';
import '../scss/Shops.scss';
import Card from '../components/shop/Card';
import { Layout } from '../components/layout/components';
import { dataShop } from '../data-shop';

const StoreSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortByMaxPrice, setSortByMaxPrice] = useState(false);
  const [sortByMinPrice, setSortByMinPrice] = useState(false);
  const [sortByRating, setSortByRating] = useState(false);

  let filteredStores = dataShop.filter(store =>
    store.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortByMaxPrice) {
    filteredStores = filteredStores.sort((a, b) => b.maxPrice - a.maxPrice);
  } else if (sortByMinPrice) {
    filteredStores = filteredStores.sort((a, b) => a.minPrice - b.minPrice); 
  } else if (sortByRating) {
    filteredStores = filteredStores.sort((a, b) => b.rating - a.rating); 
  } 
  return (
    <Layout>
      <div className='container'>
        <h1>Store Search</h1>
        <input
          type="text"
          placeholder="Search store..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Filter
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setSortByMaxPrice(true)}
              >
                Max Price
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button" onClick={() => {
                setSortByMinPrice(true);
              }}>Min Price</button>
            </li>
            <li>
              <button className="dropdown-item" type="button" onClick={() => {
                setSortByRating(true);
              }}>Rating</button>
            </li>
          </ul>
        </div>
        {filteredStores.length > 0 ? (
          filteredStores.map(store => (
            <div key={store.store_id} className="pb-5 packet-card rounded mb-1">
              <div className="row justify-content-center">
                <Card packageData={store}/>
              </div>
            </div> 
          ))
        ) : (
          <li>No stores found</li>
        )}     
      </div>
    </Layout>
  );
};

export default StoreSearch;
