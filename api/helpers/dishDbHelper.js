const db = require('../../data/dbConfig');

module.exports = {
  getDishes,
  addDish,
  getDish,
}

function getDishes() {
  return db('dishes');
}

async function addDish(cohort) {
  const [id] = await db('dishes')
    .insert(cohort, 'id');
  return getDish(id);
}

function getDish(id) {
  return db('dishes')
    .where({ id })
    .first();
}
