"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var core_1 = require("@sustain/core");
var UserController = /** @class */ (function () {
    function UserController(userService) {
        this.userService = userService;
    }
    UserController.prototype.users = function () {
        return "ok";
    };
    UserController.prototype.user = function (request) {
        var id = request.params.id;
        return id;
    };
    __decorate([
        core_1.Get('/users')
    ], UserController.prototype, "users");
    __decorate([
        core_1.Get('/user/:id'),
        __param(0, core_1.Request())
    ], UserController.prototype, "user");
    UserController = __decorate([
        core_1.Controller()
    ], UserController);
    return UserController;
}());
exports["default"] = UserController;
