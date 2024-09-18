import React, { useState } from 'react';
import '../scss/Shops.scss';
import Card from '../components/shop/Card';
import { Layout } from '../components/layout/components';
import { dataShop } from '../data-shop';

const StoreSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Функция для фильтрации магазинов по названию
  const filteredStores = dataShop.filter(store =>
    store.title.toLowerCase().includes(searchTerm.toLowerCase())
  );



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
            {/* Вывод отфильтрованных магазинов */}
            
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
