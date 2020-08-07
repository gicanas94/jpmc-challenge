export const sortArrayByDate = (array) =>
  array.sort((a, b) => new Date(a.date) - new Date(b.date));

export const removeDuplicatedObjectsFromArrays = (a, b) =>
  b.filter((item) => {
    for (let i = 0, len = a.length; i < len; i += 1) {
      if (a[i].id === item.id) {
        return false;
      }
    }

    return true;
  });
