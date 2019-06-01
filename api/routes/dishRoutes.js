const express = require('express');

const router = express.Router();

const {
  getDishes,
  addDish,
  getDish,

} = require('../helpers/dishDbHelper');

/*
@GET: all dishes
@PARAMS: none
@ROUTE: "/api/dishes"
*/

router.get('/', async (req, res) => {
  try {
    const dishes = await getDishes();

    if (dishes.length) {
      res.status(200).json(dishes)

    } else {
      res.status(404).json({message: `No dishes found`})

    }
  }
  catch (err) {
    res.status(500).json({error: `Unable to retrieve dishes`})
  }
});

/*
@GET: dish
@PARAMS: id[STRING]!
@ROUTE: "/api/dishes/:id"
*/

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const dish = await getDish(id);

    if (!dish) {
      return res.status(404).json({message: 'dish not found'});
    }

    res.status(200).json(dish);
  }
  catch (err) {
    res.status(500)
      .json({
        err,
        message: 'Unable to process request'
      })
  }
});


/*
@POST: create new dish
@PARAMS: name[STRING]!
@ROUTE: "/api/dishes"
*/

router.post('/', async (req, res) => {
  const newDish = req.body;

  try {
    const { name } = newDish;

    const dishes = await getDishes();

    const result = dishes.filter((dish) => {
      return name === dish.name;
    });

    if (!name) {
      return res.status(400)
        .json({
          error: 'name missing'
        });

    } else if (result.length) {

      return res.status(400)
        .json({
          message: `${name} already exist`
        });

    } else {

      const dishAdded = await addDish(newDish);

      res.status(201).json(dishAdded);
    }
  }
  catch (err) {
    return res.status(500)
      .json({
        err,
        message: 'Unable to process request'
      })
  }

})


module.exports = router;
