const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/tags', (req, res) => {
  Tag.findAll({
    include: Product.pro_name
  })
    .then(cat => {
    res.json(cat)
    })
});

router.get('/tags:id', (req, res) => {
  Tag.findAll({
    where: {
      id: req.params.id
    },
    include: Product.pro_name
  })
    .then(cat => {
    res.json(cat)
    })
});

router.post('/tags', (req, res) => {
  Tag.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.productIds.length) {
        const productTagIdArr = req.body.productIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/tags:id', (req, res) => {
  const tag = Tag.findOne({
    where: {
      id: req.params.id
    }
  })

  if (!tag) return res.status(404).json({})

  tag.id = req.params.id
  res.json(tag)
});

router.delete('/tags:id', (req, res) => {
  Tag.destroy({
    where: {
      tag: req.params.id
    }
  })
    .then(cat => {
    res.json(cat)
  })
});

module.exports = router;
