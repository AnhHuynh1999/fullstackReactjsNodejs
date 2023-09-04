"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var configViewEngine = function configViewEngine(app) {
  app.use(_express["default"]["static"](".src/public"));
  app.set("view engine", "ejs"); //tương tự jsp, blade
  app.set("views", "./src/views");
};
module.exports = configViewEngine;