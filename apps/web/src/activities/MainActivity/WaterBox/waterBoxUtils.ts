import { Dayjs } from 'dayjs';

const getCupCount = (date: Dayjs) => {
  if (localStorage.getItem('waters') === null) {
    localStorage.setItem('waters', '[]');
  }
  const simple = date.format('YYYY-MM-DD');
  const waters = JSON.parse(localStorage.getItem('waters') || '[]');
  const water = waters.find((water: any) => water.date === simple);
  return water ? water.count : 0;
};


const addCup = (date: Dayjs) => {
  if (localStorage.getItem('waters') === null) {
    localStorage.setItem('waters', '[]');
  }
  const simpleDate = date.format('YYYY-MM-DD');
  const waters = JSON.parse(localStorage.getItem('waters') || '[]');
  const water = waters.find((water: any) => water.date === simpleDate);
  if (water) {
    water.count++;
  } else {
    waters.push({ date: simpleDate, count: 1 });
  }
  localStorage.setItem('waters', JSON.stringify(waters));
};

export { getCupCount, addCup };