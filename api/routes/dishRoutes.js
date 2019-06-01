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


});

/*
@GET: dish
@PARAMS: id[STRING]!
@ROUTE: "/api/dishes/:id"
*/

router.get('/:id', async (req, res) => {

});


/*
@POST: create new dish
@PARAMS: name[STRING]!
@ROUTE: "/api/dishes"
*/

router.post('/', async (req, res) => {

})


module.exports = router;
