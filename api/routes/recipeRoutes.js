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

})


module.exports = router;
