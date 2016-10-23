"use strict";
var Food = (function () {
    function Food(food, calories, protein, fat, carbs, comment) {
        this.food = food;
        this.calories = calories;
        this.protein = protein;
        this.fat = fat;
        this.carbs = carbs;
        this.comment = comment;
        this.datetime = new Date();
    }
    Food.prototype.calculatedCalories = function () {
        return this.protein * 4 + this.carbs * 4 + this.fat * 9;
    };
    Food.prototype.highCal = function () {
        return this.calories > 500;
    };
    Food.prototype.lowCal = function () {
        return this.calories < 500;
    };
    return Food;
}());
exports.Food = Food;
//# sourceMappingURL=food.model.js.map