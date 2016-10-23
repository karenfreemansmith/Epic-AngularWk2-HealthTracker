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
var food_model_1 = require('./food.model');
var AddFoodComponent = (function () {
    function AddFoodComponent() {
        this.addFoodSender = new core_1.EventEmitter();
    }
    AddFoodComponent.prototype.addClicked = function (food, calories, protein, carbs, fat, comment) {
        if ((food !== '') && (calories > 0)) {
            var newFoodToAdd = new food_model_1.Food(food, calories, protein, carbs, fat, comment);
            this.addFoodSender.emit(newFoodToAdd);
        }
        else {
            alert("Please enter at least the food name and calories!");
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', food_model_1.Food)
    ], AddFoodComponent.prototype, "childSelectedFood", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddFoodComponent.prototype, "addFoodSender", void 0);
    AddFoodComponent = __decorate([
        core_1.Component({
            selector: "add-food",
            template: "\n  <div *ngIf=\"childSelectedFood===null\" class=\"row\">\n    <h3>Add Food:</h3>\n    <div class=\"form-group col-xs-9\">\n      <label>Enter Food Description: </label>\n      <input #newFood class=\"form-control\">\n    </div>\n    <div class=\"form-group col-xs-3\">\n      <label>Calories: </label>\n      <input #newCalories class=\"form-control\" type=\"number\">\n    </div>\n    <div class=\"form-group col-xs-4\">\n      <label>Protein<br>(in grams): </label>\n      <input #newProtein class=\"form-control\" type=\"number\">\n    </div>\n    <div class=\"form-group col-xs-4\">\n      <label>Carbs<br>(in grams): </label>\n      <input #newCarbs class=\"form-control\" type=\"number\">\n    </div>\n    <div class=\"form-group col-xs-4\">\n      <label>Fat<br>(in grams): </label>\n      <input #newFat class=\"form-control\" type=\"number\">\n    </div>\n    <div class=\"form-group col-xs-12\">\n      <label>Comment: </label>\n      <input #newComment class=\"form-control\">\n    </div>\n    <div class=\"form-group col-xs-12\">\n    <button (click)=\"\n      addClicked(newFood.value, newCalories.value, newProtein.value, newFat.value, newCarbs.value, newComment.value);\n      newFood.value='';\n      newCalories.value=0;\n      newProtein.value=0;\n      newCarbs.value=0;\n      newFat.value=0;\n      newComment.value='';\n    \" class=\"btn form-control\">Add Food</button>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AddFoodComponent);
    return AddFoodComponent;
}());
exports.AddFoodComponent = AddFoodComponent;
//# sourceMappingURL=food-add.component.js.map