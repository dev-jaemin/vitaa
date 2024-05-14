const getPercentage = (value: number, total: number) => {
  const ans = (value / total) * 100;
  return Number(ans.toPrecision(2));
};

export default getPercentage;
