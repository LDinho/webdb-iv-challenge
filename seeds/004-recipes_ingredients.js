exports.seed = async function(knex) {
  await knex('recipes_ingredients').insert([
    {id: 1, recipe_id: 4, ingredient_id: 4, quantity: 3},
    {id: 2, recipe_id: 3, ingredient_id: 3, quantity: 1},
    {id: 3, recipe_id: 2, ingredient_id: 4, quantity: 2},
    {id: 4, recipe_id: 3, ingredient_id: 6, quantity: 1.5},
    {id: 5, recipe_id: 1, ingredient_id: 6, quantity: 2.5},
    {id: 6, recipe_id: 3, ingredient_id: 7, quantity: 5},
  ]);
};
