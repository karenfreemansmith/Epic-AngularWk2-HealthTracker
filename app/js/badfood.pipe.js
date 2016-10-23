"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BadFoodPipe = (function () {
    function BadFoodPipe() {
    }
    BadFoodPipe.prototype.transform = function (input, badFood) {
        var output = [];
        if (badFood === "high calorie") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].highCal()) {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else if (badFood === "low calorie") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].lowCal()) {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else {
            return input;
        }
    };
    BadFoodPipe = __decorate([
        core_1.Pipe({
            name: "badfood",
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], BadFoodPipe);
    return BadFoodPipe;
}());
exports.BadFoodPipe = BadFoodPipe;
//# sourceMappingURL=badfood.pipe.js.map