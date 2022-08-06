const { Product } = require('../models');

const productData = [
  {
    pro_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    cat_id: 1,
  },
  {
    pro_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    cat_id: 5,
  },
  {
    pro_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    cat_id: 4,
  },
  {
    pro_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    cat_id: 3,
  },
  {
    pro_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    cat_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
