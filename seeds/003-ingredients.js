exports.seed = async function(knex) {
  await knex('ingredients').insert([
    {id: 1, name: 'cup corn flour'},
    {id: 2, name: 'cup wheat flour'},
    {id: 3, name: 'lbs ground poultry'},
    {id: 4, name: 'cup tomato sauce'},
    {id: 5, name: 'ounce cheese'},
    {id: 6, name: 'pinch of salt'},
    {id: 7, name: 'spoon olive oil'},
  ]);
};
