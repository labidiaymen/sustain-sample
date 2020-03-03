"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@sustain/core");
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            {
                "_id": "5e3430685106fe9e0f16e9f8",
                "age": 39,
                "name": "Janell Estrada",
                "gender": "female",
                "company": "ROOFORIA",
                "email": "janellestrada@rooforia.com",
                "phone": "+216 (932) 488-2871",
                "address": "707 Withers Street, Worton, California, 9385",
                "registered": "2019-11-16T08:35:02 -01:00"
            },
            {
                "_id": "5e34306810bd9ef2483a947b",
                "age": 35,
                "name": "Millicent Rojas",
                "gender": "female",
                "company": "MAGNEMO",
                "email": "millicentrojas@magnemo.com",
                "phone": "+216 (981) 519-3442",
                "address": "533 Stuyvesant Avenue, Blende, Tennessee, 9506",
                "registered": "2014-08-16T08:02:06 -01:00"
            }
        ];
    }
    UserService.prototype.get = function (id) {
        return this.users.find(function (user) { return user._id === id; });
    };
    UserService.prototype.syncGet = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(JSON.stringify(_this.users.find(function (user) { return user._id === id; })));
            }, 1000);
        });
    };
    UserService.prototype.list = function () {
        return this.users;
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
