const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: Product
  })
    .then(data => {
    res.json(data)
    })
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    model: Product
  })
    .then(cat => {
      res.json(cat)
    })
});

router.post('/', (req, res) => {
  const category = {
    category_name: req.body.category_name
  }
  Category.create(category )
  .then(new_cat => res.json(new_cat))
})

router.put('/:id', (req, res) => {

  Category.update(
    req.body,
    {
    where: {
      id: req.params.id
    }
  })
  .then((new_cat) => res.json(new_cat))
  .catch(err => {
    console.log(err);
  })
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(cat => {
    res.json(cat)
  })
  .catch(err => {
    console.log(err);
  })
});

module.exports = router;
