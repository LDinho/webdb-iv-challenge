const db = require('../../data/dbConfig');

module.exports = {
  getRecipes,
  addRecipe,
}

function getRecipes() {
  // return db('recipes');

  return db.select(
    'r.id as id',
    'r.name as name',
    'd.name as dish'
    )
    .from(
      'recipes as r'
    )
    .join(
      'dishes as d',
      'r.dish_id',
      'd.id'
    );
}

async function addRecipe(recipe) {
  const [id] = await db('recipes')
    .insert(recipe, 'id');
  return { id };
}

