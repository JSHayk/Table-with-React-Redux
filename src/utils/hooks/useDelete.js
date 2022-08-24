export const useDelete = (arr, check) => {
  return arr.filter((item) => item.id !== check);
};
