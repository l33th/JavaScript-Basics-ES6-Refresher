const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 1));

function includes(array, searchElements) {
  for (let element of array)
    if (element === searchElements)
      return true
  return false;
}

