const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: Product
  })
    .then(cat => {
    res.json(cat)
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
  Category.create({ Category: req.body.category })
    .then(new_cat => res.json(new_cat))
});

router.put('/:id', (req, res) => {
  const cat = Category.findOne({
    where: {
      id: req.params.id
    }
  })

  if (!cat) return res.status(404).json({})

  cat.id = req.body.id
  res.json(cat)
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      category: req.params.id
    }
  })
    .then(cat => {
    res.json(cat)
  })
});

module.exports = router;
