import { Meal } from '../../../types/meal';
import Breakfast from '../../../assets/breakfast.png';
import Lunch from '../../../assets/lunch.png';
import Dinner from '../../../assets/dinner.png';
import Snack from '../../../assets/snack.png';

const useMealImage = (meal: Meal) => {
  const images = {
    Breakfast: Breakfast,
    Lunch: Lunch,
    Dinner: Dinner,
    Snack: Snack,
  };

  return images[meal];
};

export default useMealImage;
