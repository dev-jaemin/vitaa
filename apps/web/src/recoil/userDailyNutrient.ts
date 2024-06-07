import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

import { MaxDaily } from '../constants/userDailyNutrient';

const userMaxNutrients = atom<MaxDaily>({
  key: 'userMaxNutrients',
  default: {
    maxCalories: 2600,
    maxCarbs: 130,
    maxFat: 60,
    maxProteins: 65,
  },
});

const useUserMaxNut = () => useRecoilValue(userMaxNutrients);
const useSetUserMaxNut = () => useSetRecoilState(userMaxNutrients);

export { useUserMaxNut, useSetUserMaxNut };
