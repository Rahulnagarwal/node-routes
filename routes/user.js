const express = require("express");

const { handleGetAllUsers, handleGetUserById, handleUpdateUserByIdasync, handleDeleteUserByIdasync, handleCreateNewUser } = require("../controller/user")

const router = express.Router();

// Routes
router.route('/').get(handleGetAllUsers).post(handleCreateNewUser)

router.route('/:id')
    .get(handleGetUserById)
    .patch(handleUpdateUserByIdasync)
    .delete(handleDeleteUserByIdasync);

module.exports = router;



// users.push({ ...body, id: users.length + 1 });
// fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
//     return res.json({ status: "succees", id: users.length });
// })

// deleting user to JSON file.
// app.delete('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const projectIndex = users.findIndex(p => p.id == id);
//     users.splice(projectIndex, 1);

//     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (req, data) => {
//         return res.json({ status: "success", id: users.length });
//     })
// })

// updating user
// app.patch('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const userIndex = users.findIndex(p => p.id == id);

//     if (userIndex === -1) { return res.status(404).json({ error: "User not found" }); }
//     const updatedUser = { ...users[userIndex], ...req.body };
//     users[userIndex] = updatedUser;
//     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
//         if (err) throw err;
//         return res.json(updatedUser);
//     });
// });