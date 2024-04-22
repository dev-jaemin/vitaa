import { Meal } from '../../../types/Meal';
import Breakfast from '../../../assets/breakfast.png';
import Lunch from '../../../assets/lunch.png';
import Dinner from '../../../assets/dinner.png';
import Snack from '../../../assets/snack.png';

const useMealImage = (meal: Meal) => {
  const images = {
    BREAKFAST: Breakfast,
    LUNCH: Lunch,
    DINNER: Dinner,
    SNACK: Snack,
  };

  return images[meal];
};

export default useMealImage;
