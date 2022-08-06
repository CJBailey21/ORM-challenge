const { ProductTag } = require('../models');

const productTagData = [
  {
    pro_id: 1,
    tag_id: 6,
  },
  {
    pro_id: 1,
    tag_id: 7,
  },
  {
    pro_id: 1,
    tag_id: 8,
  },
  {
    pro_id: 2,
    tag_id: 6,
  },
  {
    pro_id: 3,
    tag_id: 1,
  },
  {
    pro_id: 3,
    tag_id: 3,
  },
  {
    pro_id: 3,
    tag_id: 4,
  },
  {
    pro_id: 3,
    tag_id: 5,
  },
  {
    pro_id: 4,
    tag_id: 1,
  },
  {
    pro_id: 4,
    tag_id: 2,
  },
  {
    pro_id: 4,
    tag_id: 8,
  },
  {
    pro_id: 5,
    tag_id: 3,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
