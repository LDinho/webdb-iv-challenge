exports.seed = async function(knex) {
  await knex('recipes').insert([
    {id: 1, name: 'Mex', dish_id: 2 },
    {id: 2, name: 'Hot', dish_id: 2 },
    {id: 3, name: 'Sicilian', dish_id: 3 },
    {id: 4, name: 'Italian', dish_id: 1 },
  ]);
};
