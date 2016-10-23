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
var ShowFoodComponent = (function () {
    function ShowFoodComponent() {
        this.clickedFood = new core_1.EventEmitter();
        this.badFoodSelection = "All";
    }
    ShowFoodComponent.prototype.onChange = function (optionFromMenu) {
        this.badFoodSelection = optionFromMenu;
    };
    ShowFoodComponent.prototype.selectFood = function (foodToEdit) {
        this.clickedFood.emit(foodToEdit);
    };
    ShowFoodComponent.prototype.getFood = function () {
        this.childFoodList.push(new food_model_1.Food("XL Hershey's Symphony Bar", 600, 9, 30, 63, "should have got the little one"));
        this.childFoodList.push(new food_model_1.Food("Avacado", 340, 5, 27, 27, "but good fats"));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ShowFoodComponent.prototype, "childFoodList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ShowFoodComponent.prototype, "clickedFood", void 0);
    ShowFoodComponent = __decorate([
        core_1.Component({
            selector: "show-food",
            template: "\n  <div class=\"row\">\n    <div class=\"col-xs-6\">\n      <select (change)=\"onChange($event.target.value)\" class=\"form-control\">\n        <option value = \"All\" selected=\"selected\">Show All Food</option>\n        <option value = \"high calorie\">High Calorie Foods</option>\n        <option value = \"low calorie\">Low Calorie Foods</option>\n      </select>\n    </div>\n    <div *ngIf=\"childFoodList.length<=0\" class=\"col-xs-3\"><button (click)=\"getFood()\" class=\"btn form-control\">Get Food</button></div>\n\n  </div>\n  <div *ngFor=\"let currentFood of childFoodList | badfood: badFoodSelection \" >\n    <h3>\n      {{ currentFood.food }}\n      ({{ currentFood.calories }} calories)\n    </h3>\n    <h4>\n      {{ currentFood.datetime | date:'longDate' }}\n      @ {{ currentFood.datetime | date:'shortTime' }}\n    </h4>\n    <p>\n      Protein: {{ currentFood.protein }}g,\n      Carbohydrates: {{ currentFood.carbs }}g,\n      Fat: {{ currentFood.fat }}g\n      (Calculated calories: {{ currentFood.calculatedCalories() }})\n    </p>\n    <p><strong>Comments: </strong> {{ currentFood.comment }}</p>\n    <button (click)=\"selectFood(currentFood)\" class=\"btn form-control\">Click HERE to edit food</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ShowFoodComponent);
    return ShowFoodComponent;
}());
exports.ShowFoodComponent = ShowFoodComponent;
//# sourceMappingURL=food-list.component.js.map