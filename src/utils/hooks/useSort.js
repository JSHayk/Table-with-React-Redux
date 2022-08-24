export const useSort = (arr, type) => {
  if (type === "up") {
    return arr.sort((a, b) => {
      const firstName = a.name;
      const secondName = b.name;
      if (firstName > secondName) return 1;
      else if (firstName < secondName) return -1;
      else return 0;
    });
  } else if ("down") {
    return arr.sort((a, b) => {
      const firstName = a.name;
      const secondName = b.name;
      if (firstName < secondName) return 1;
      else if (firstName > secondName) return -1;
      else return 0;
    });
  } else return arr;
};
