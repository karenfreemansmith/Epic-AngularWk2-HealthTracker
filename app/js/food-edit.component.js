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
var EditFoodComponent = (function () {
    function EditFoodComponent() {
        this.editFoodSender = new core_1.EventEmitter();
    }
    EditFoodComponent.prototype.updateClicked = function () {
        this.editFoodSender.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', food_model_1.Food)
    ], EditFoodComponent.prototype, "childSelectedFood", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditFoodComponent.prototype, "editFoodSender", void 0);
    EditFoodComponent = __decorate([
        core_1.Component({
            selector: "edit-food",
            template: "\n  <div *ngIf=\"childSelectedFood\" class=\"row\">\n    <h3>Edit {{childSelectedFood.food}}:</h3>\n    <div class=\"form-group col-xs-9\">\n      <label>Enter Food Description: </label>\n      <input [(ngModel)]=\"childSelectedFood.food\" class=\"form-control\">\n    </div>\n    <div class=\"form-group col-xs-3\">\n      <label>Calories: </label>\n      <input [(ngModel)]=\"childSelectedFood.calories\" class=\"form-control\" type=\"number\" min=0 max=5000>\n    </div>\n    <div class=\"form-group col-xs-4\">\n      <label>Protein<br>(in grams): </label>\n      <input [(ngModel)]=\"childSelectedFood.protein\" class=\"form-control\" type=\"number\" min=0>\n    </div>\n    <div class=\"form-group col-xs-4\">\n      <label>Carbs<br>(in grams): </label>\n      <input [(ngModel)]=\"childSelectedFood.carbs\" class=\"form-control\" type=\"number\" min=0>\n    </div>\n    <div class=\"form-group col-xs-4\">\n      <label>Fat<br>(in grams): </label>\n      <input [(ngModel)]=\"childSelectedFood.fat\" class=\"form-control\" type=\"number\" min=0>\n    </div>\n    <div class=\"form-group col-xs-12\">\n      <label>Comment: </label>\n      <input [(ngModel)]=\"childSelectedFood.comment\" class=\"form-control\">\n    </div>\n    <div class=\"form-group col-xs-12\">\n    <button (click)=\"updateClicked()\" class=\"btn form-control\">Done Editing</button>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EditFoodComponent);
    return EditFoodComponent;
}());
exports.EditFoodComponent = EditFoodComponent;
//# sourceMappingURL=food-edit.component.js.map