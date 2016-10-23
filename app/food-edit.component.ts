import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: "edit-food",
  template:`
  <div *ngIf="childSelectedFood" class="row">
    <h3>Edit {{childSelectedFood.food}}:</h3>
    <div class="form-group col-xs-9">
      <label>Enter Food Description: </label>
      <input [(ngModel)]="childSelectedFood.food" class="form-control">
    </div>
    <div class="form-group col-xs-3">
      <label>Calories: </label>
      <input [(ngModel)]="childSelectedFood.calories" class="form-control" type="number" min=0 max=5000>
    </div>
    <div class="form-group col-xs-4">
      <label>Protein<br>(in grams): </label>
      <input [(ngModel)]="childSelectedFood.protein" class="form-control" type="number" min=0>
    </div>
    <div class="form-group col-xs-4">
      <label>Carbs<br>(in grams): </label>
      <input [(ngModel)]="childSelectedFood.carbs" class="form-control" type="number" min=0>
    </div>
    <div class="form-group col-xs-4">
      <label>Fat<br>(in grams): </label>
      <input [(ngModel)]="childSelectedFood.fat" class="form-control" type="number" min=0>
    </div>
    <div class="form-group col-xs-12">
      <label>Comment: </label>
      <input [(ngModel)]="childSelectedFood.comment" class="form-control">
    </div>
    <div class="form-group col-xs-12">
    <button (click)="updateClicked()" class="btn form-control">Done Editing</button>
    </div>
  </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() editFoodSender = new EventEmitter();
  updateClicked() {
    this.editFoodSender.emit();
  }
}
