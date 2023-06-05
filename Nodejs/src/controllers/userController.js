import userService from "../services/userService.js";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  // check email exists
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter",
    });
  }

  // compare password
  // return userInfo
  // access_token : JWT json web token
  let userData = await userService.handleUserLogin(email, password);
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

let handleGetAllUsers = async (req, res, next) => {
  let id = req.query.id; // All, id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing id parameter",
      users: [],
    });
  }
  let users = await userService.getAllUsers(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: "Ok",
    users,
  });
};

let handleCreateNewUser = async (req, res) => {
  let message = await userService.createNewUser(req.body);
  return res.status(200).json(message);
};

let handleEditUser = async (req, res) => {
  if (req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required id parameter",
    });
  }
  let message = await userService.deleteUser(req.body);
  return res.status(200).json(message);
};
let handleDeleteUser = async (req, res) => {
  let data = req.body;
  let message = await userService.updateUser(data);
  return res.status(200).json(message);
};

module.exports = {
  handleLogin,
  handleGetAllUsers,
  handleCreateNewUser,
  handleEditUser,
  handleDeleteUser,
};
