import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { MaxDaily } from '../constants/userDailyNutrient';

const userMaxNutrients = atom<MaxDaily>({
  key: 'userMaxNutrients',
  default: {
    maxCalories: 0,
    maxCarbs: 0,
    maxFat: 0,
    maxProteins: 0,
  },
});

const useUserMaxNut = () => useRecoilValue(userMaxNutrients);
const useSetUserMaxNut = () => useSetRecoilState(userMaxNutrients);

export { useUserMaxNut, useSetUserMaxNut };
