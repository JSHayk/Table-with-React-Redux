export const deleteItem = (arr, check) => {
  return arr.filter((item) => item.id !== check);
};
