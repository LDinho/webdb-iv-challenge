const express = require('express');

const router = express.Router();

const {
  getRecipes,
  addRecipe,

} = require('../helpers/recipeDbHelper');

/*
@GET: all recipes
@PARAMS: none
@ROUTE: "/api/recipes"
*/

router.get('/', async (req, res) => {

  try {
    const recipes = await getRecipes();

    if (recipes.length) {
      res.status(200).json(recipes)

    } else {
      res.status(404).json({message: `No dishes found`})

    }
  }
  catch (err) {
    res.status(500).json({error: `Unable to retrieve dishes`})
  }
});

/*
@GET: recipe
@PARAMS: id[STRING]!
@ROUTE: "/api/recipes/:id"
*/

router.get('/:id', async (req, res) => {

});


/*
@POST: create new recipe
@PARAMS: name[STRING]!
@ROUTE: "/api/recipes"
*/

router.post('/', async (req, res) => {
  const newRecipe = req.body;

  try {
    const { name, dish_id } = newRecipe; // dish id is required

    const recipes = await getRecipes();

    const result = recipes.filter((recipe) => {
      return name === recipe.name;
    });

    if (!name || !dish_id) { // dish id is required
      return res.status(400)
        .json({
          error: 'name or dish id missing'
        });

    } else if (result.length) {

      return res.status(400)
        .json({
          message: `${name} already exist`
        });

    } else {

      const recipeAdded = await addRecipe(newRecipe);

      res.status(201).json(recipeAdded);
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
