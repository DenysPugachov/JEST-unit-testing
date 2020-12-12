function map(array, callbackFn) {
  const newArray = [];
  array.forEach(element => {
    newArray.push(callbackFn(element));
  });
  return newArray;
}

module.exports = { map };