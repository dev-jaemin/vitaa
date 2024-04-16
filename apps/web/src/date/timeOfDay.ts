export const getTimeIntervalOfDay = (date: Date) => {
  const hour = date.getHours();
  if (hour >= 0 && hour < 12) {
    return '아침이에요 🌞';
  } else if (hour >= 12 && hour < 17) {
    return '오후예요 🌤';
  } else if (hour >= 17 && hour < 20) {
    return '저녁이에요 🌆';
  } else {
    return '밤이에요 🌙';
  }
};
