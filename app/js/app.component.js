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
var AppComponent = (function () {
    function AppComponent() {
        this.parentFoodList = [];
        this.selectedFood = null;
    }
    AppComponent.prototype.addFood = function (newFoodFromChild) {
        this.parentFoodList.push(newFoodFromChild);
    };
    AppComponent.prototype.showFood = function (clickedFood) {
        this.selectedFood = clickedFood;
    };
    AppComponent.prototype.editDone = function () {
        this.selectedFood = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n      <h1><img src=\"build/images/logo.png\" class=\"logo\">Epic Health Tracker</h1>\n      <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <add-food\n          [childSelectedFood] = \"selectedFood\"\n          (addFoodSender) = \"addFood($event)\"\n        ></add-food>\n        <edit-food\n          [childSelectedFood] = \"selectedFood\"\n          (editFoodSender)=\"editDone()\"\n        ></edit-food>\n      </div>\n      <div class=\"col-sm-6\">\n        <show-food\n          [childFoodList] = \"parentFoodList\"\n          (clickedFood) = \"showFood($event)\"\n        ></show-food>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map