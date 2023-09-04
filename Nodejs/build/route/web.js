"use strict";

var _express = _interopRequireDefault(require("express"));
var _homeController = _interopRequireDefault(require("../controllers/homeController"));
var _userController = _interopRequireDefault(require("../controllers/userController"));
var _doctorController = _interopRequireDefault(require("../controllers/doctorController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
var initWebRoutes = function initWebRoutes(app) {
  router.get("/", _homeController["default"].getHomePage);
  router.get("/about", _homeController["default"].getAboutPage);
  router.get("/crud", _homeController["default"].getCRUD);
  router.post("/post-crud", _homeController["default"].postCRUD);
  router.get("/get-crud", _homeController["default"].displayGetCRUD);
  router.get("/edit-crud", _homeController["default"].getEditCRUD);
  router.post("/put-crud", _homeController["default"].putCRUD);
  router.get("/delete-crud", _homeController["default"].deleteCRUD);
  router.post("/api/login", _userController["default"].handleLogin);
  router.get("/api/get-all-users", _userController["default"].handleGetAllUsers);
  router.post("/api/create-new-user", _userController["default"].handleCreateNewUser);
  router.put("/api/edit-user", _userController["default"].handleEditUser);
  router["delete"]("/api/delete-user", _userController["default"].handleDeleteUser);
  router.get("/api/allcode", _userController["default"].getAllCode);
  router.get("/api/top-doctor-home", _doctorController["default"].getTopDoctorHome);
  router.get("/api/get-all-doctor", _doctorController["default"].getAllDoctor);
  router.post("/api/save-infor-doctors", _doctorController["default"].postInforDoctor);
  router.get("/api/get-detail-doctor-by-id", _doctorController["default"].getDetailDoctorById);
  return app.use("/", router);
};
module.exports = initWebRoutes;