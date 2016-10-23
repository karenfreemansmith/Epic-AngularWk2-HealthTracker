import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "badfood",
  pure: false
})

export class BadFoodPipe implements PipeTransform {
  transform (input: Food[], badFood){
    var output: Food[] = [];
    if (badFood === "high calorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].highCal()) {
          output.push(input[i]);
        }
      }
      return output
    } else if (badFood === "low calorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].lowCal()) {
          output.push(input[i]);
        }
      }
      return output
    } else {
      return input;
    }
  }
}
