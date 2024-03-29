"use strict";

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return Promise.all([queryInterface.changeColumn("Users", "image", {
      type: Sequelize.BLOB('long'),
      //tiny , medium, long
      allowNull: true
    })]);
  },
  down: function down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.changeColumn("Users", "image", {
      type: Sequelize.STRING,
      allowNull: true
    }, {
      transaction: transaction
    })]);
  }
};