const express = require("express");
const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
const ScheduleController = require("./controllers/ScheduleController");

const routes = express.Router();

routes.post("/user", UserController.create);
routes.put("/user/:_id", UserController.update);
routes.get("/users", UserController.index);

routes.post("/session", SessionController.login);

routes.post("/schedule", ScheduleController.create);
routes.get("/schedules/:_id", ScheduleController.show);

module.exports = routes;
