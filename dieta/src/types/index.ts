export type PersonDataType = {
  name: string;
  date: string;
  professional: string;
  crn: string;
  meals: MealType[];
};

export type FoodItemType = {
  uppertag?: string;
  name: string;
  weight?: string | number;
  unit?: string;
  list?: string[];
};

export type FoodCardType = {
  options: FoodItemType[];
};

export type MealType = {
  time: string;
  name: string;
  foods: FoodCardType[];
  type?: string;
};
