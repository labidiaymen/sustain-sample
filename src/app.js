"use strict";
exports.__esModule = true;
require('source-map-support').install();
var core_1 = require("@sustain/core");
var user_controller_1 = require("./controllers/user.controller");
var app = {
    controllers: [
        user_controller_1["default"]
    ],
    providers: [user_controller_1["default"]]
};
/**
 * Bootstrap the application
 */
core_1.bootstrap(app);
