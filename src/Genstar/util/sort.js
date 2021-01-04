const shuffle = (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

const randomItems = (array, number = 1, currentItems = []) =>
  shuffle(array)
    .filter((item) => !currentItems.includes(item))
    .slice(0, number);


const randomInt = (min = 1, max = 161) =>
  (Math.floor(Math.pow(10, 14) * Math.random() * Math.random()) %
    (max - min + 1)) +
  min;

export { randomInt, randomItems, shuffle };
