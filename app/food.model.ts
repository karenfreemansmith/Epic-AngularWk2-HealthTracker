export class Food {
  public datetime: Date = new Date();
  constructor(public food: string,
              public calories: number,
              public protein: number,
              public fat: number,
              public carbs: number,
              public comment: string) { }

  calculatedCalories() {
    return this.protein*4 + this.carbs*4 + this.fat*9;
  }

  highCal() {
    return this.calories > 500;
  }

  lowCal() {
    return this.calories < 500;
  }
}
