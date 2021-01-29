const router = require('express').Router();
let Item = require('../models/item.model');

router.route('/').get((req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.username;
  const description = req.body.description;
  const ingredients = req.body.ingredients;
  const price = Number(req.body.duration);
  const code = req.body.code;
  const image = req.body.code;

  const newItem = new Item({
    name,
    description,
    price,
    ingredients,
    code,
    image,
  });

  newItem
    .save()
    .then(() => res.json('Item added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Item.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json('Item deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Item.findById(req.params.id)
    .then((item) => {
      item.name = req.body.username;
      item.description = req.body.description;
      item.price = Number(req.body.price);
      item.ingredients = req.body.ingredients;
      item.code = req.body.code;
      item.image = req.body.image;

      item
        .save()
        .then(() => res.json('Item updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
