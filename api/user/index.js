const { Router } = require('express');
const {get} = require('express/lib/response')
const User = require('./user.model');



const router = Router();

//CRUD
router.get("/users", async (req, res) => {
 const user =  await User.find();
 res.status(200).json(user)
});
/* router.get('/:id', isAuthenticated, getUserById)
router.post('/', createUser)
router.put('/:id', isAuthenticated, updateUser)
router.delete('/:id', isAuthenticated, deleteUser) */

module.exports = router;
