export const searchItem = (arr, checkVal) => {
  return arr.filter((item) => item.name.toLowerCase().includes(checkVal));
};
