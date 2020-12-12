class Lodash {
  compact(array) {
    return array.filter(val => !!val);//!!val => cast a variable bo boolean
  }

  groupBy(array, prop) {
    return array.reduce((acc, item) => {
      const key = typeof prop === "function" ? prop(item) : item[prop];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
  }
}
module.exports = Lodash