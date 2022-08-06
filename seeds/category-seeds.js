const { Category } = require('../models');

const categoryData = [
  {
    cat_name: 'Shirts',
  },
  {
    cat_name: 'Shorts',
  },
  {
    cat_name: 'Music',
  },
  {
    cat_name: 'Hats',
  },
  {
    cat_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
