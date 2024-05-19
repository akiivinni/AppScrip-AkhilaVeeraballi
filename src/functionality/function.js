import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../header/function.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [dropdowns, setDropdowns] = useState({
    idealFor: true,
    occasion: true,
    work: true,
    fabric: true,
    segment: true,
    suitableFor: true,
    rawMaterials: true,
    pattern: true,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  const toggleDropdown = (name) => {
    setDropdowns({ ...dropdowns, [name]: !dropdowns[name] });
  };

  return (
    <div className={`container ${filtersVisible ? '' : 'filters-hidden'}`}>
      <div className={`filter-section ${filtersVisible ? '' : 'hidden'}`}>
        <button className="toggle-button" onClick={toggleFilters}>
          Hide Filter <span>&#9660;</span>
        </button>
        <div className="filters">
          <h3>Customize</h3>
          {['idealFor', 'occasion', 'work', 'fabric', 'segment', 'suitableFor', 'rawMaterials', 'pattern'].map((filter) => (
            <div key={filter} className={`filter ${dropdowns[filter] ? '' : 'collapsed'}`}>
              <h4 onClick={() => toggleDropdown(filter)}>{filter.charAt(0).toUpperCase() + filter.slice(1)}</h4>
              <div className="filter-options">
                <label><input type="checkbox" /> All</label><br />
                <label><input type="checkbox" /> {filter.charAt(0).toUpperCase() + filter.slice(1)} Option 1</label><br />
                <label><input type="checkbox" /> {filter.charAt(0).toUpperCase() + filter.slice(1)} Option 2</label><br />
              </div>
            </div>
          ))}
        </div>
      </div>
      {!filtersVisible && (
        <button className="show-filter-button" onClick={toggleFilters}>
          Show Filter
        </button>
      )}
      <div className="products-section">
        <div className="products-header">
          <div>{products.length} ITEMS</div>
          <div className="sort-dropdown">
            <select>
              <option value="recommended">Recommended</option>
              <option value="newest">Newest First</option>
              <option value="popular">Popular</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="price-low-high">Price: Low to High</option>
            </select>
          </div>
        </div>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
