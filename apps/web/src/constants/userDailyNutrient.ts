export type MaxDaily = {
  maxCalories: number;
  maxCarbs: number;
  maxProteins: number;
  maxFat: number;
};

const FEMALE_30_UNDER: MaxDaily = {
  maxCalories: 2400,
  maxCarbs: 325,
  maxProteins: 70,
  maxFat: 80,
};

const FEMALE_50_UNDER: MaxDaily = {
  maxCalories: 2200,
  maxCarbs: 287,
  maxProteins: 65,
  maxFat: 77,
};

const FEMALE_50_OVER: MaxDaily = {
  maxCalories: 2000,
  maxCarbs: 260,
  maxProteins: 60,
  maxFat: 66,
};

const MALE_30_UNDER: MaxDaily = {
  maxCalories: 3000,
  maxCarbs: 375,
  maxProteins: 105,
  maxFat: 117,
};

const MALE_50_UNDER: MaxDaily = {
  maxCalories: 3000,
  maxCarbs: 375,
  maxProteins: 105,
  maxFat: 117,
};

const MALE_50_OVER: MaxDaily = {
  maxCalories: 2800,
  maxCarbs: 350,
  maxProteins: 98,
  maxFat: 109,
};

export { FEMALE_30_UNDER, FEMALE_50_UNDER, FEMALE_50_OVER, MALE_30_UNDER, MALE_50_OVER, MALE_50_UNDER };
