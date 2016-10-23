import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: "show-food",
  template:`
  <div class="row">
    <div class="col-xs-6">
      <select (change)="onChange($event.target.value)" class="form-control">
        <option value = "All" selected="selected">Show All Food</option>
        <option value = "high calorie">High Calorie Foods</option>
        <option value = "low calorie">Low Calorie Foods</option>
      </select>
    </div>
    <div *ngIf="childFoodList.length<=0" class="col-xs-3"><button (click)="getFood()" class="btn form-control">Get Food</button></div>

  </div>
  <div *ngFor="let currentFood of childFoodList | badfood: badFoodSelection " >
    <h3>
      {{ currentFood.food }}
      ({{ currentFood.calories }} calories)
    </h3>
    <h4>
      {{ currentFood.datetime | date:'longDate' }}
      @ {{ currentFood.datetime | date:'shortTime' }}
    </h4>
    <p>
      Protein: {{ currentFood.protein }}g,
      Carbohydrates: {{ currentFood.carbs }}g,
      Fat: {{ currentFood.fat }}g
      (Calculated calories: {{ currentFood.calculatedCalories() }})
    </p>
    <p><strong>Comments: </strong> {{ currentFood.comment }}</p>
    <button (click)="selectFood(currentFood)" class="btn form-control">Click HERE to edit food</button>
  </div>
  `
})

export class ShowFoodComponent {
  @Input() childFoodList: Food[];
  @Output() clickedFood = new EventEmitter();

  public badFoodSelection: string = "All";
  onChange(optionFromMenu) {
    this.badFoodSelection = optionFromMenu;
  }
  selectFood(foodToEdit: Food) {
    this.clickedFood.emit(foodToEdit);
  }
  getFood() {
    this.childFoodList.push(new Food("XL Hershey's Symphony Bar", 600, 9, 30, 63, "should have got the little one"));
    this.childFoodList.push(new Food("Avacado", 340,	5,	27,	27, "but good fats"));
  }
}
