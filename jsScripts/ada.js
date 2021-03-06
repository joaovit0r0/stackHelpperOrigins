"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ada = void 0;
var person_1 = require("./person");
var Ada = /** @class */ (function (_super) {
    __extends(Ada, _super);
    function Ada(id, name, bio, _whoCreatedAdaLanguage) {
        if (_whoCreatedAdaLanguage === void 0) { _whoCreatedAdaLanguage = 'Jean Ichbiah'; }
        var _this = _super.call(this, id, name, bio) || this;
        _this._whoCreatedAdaLanguage = _whoCreatedAdaLanguage;
        return _this;
    }
    Object.defineProperty(Ada.prototype, "whoCreatedAdaLanguage", {
        get: function () {
            return this._whoCreatedAdaLanguage;
        },
        enumerable: false,
        configurable: true
    });
    return Ada;
}(person_1.Person));
exports.Ada = Ada;
