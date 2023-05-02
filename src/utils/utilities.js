export function calculateMonthlyPrice(objArray) {
  const newObjArray = objArray.map((obj) => {
    if (obj.price % 10 === 0) {
      return {
        ...obj,
        price: obj.price / 10,
      };
    } else {
      return obj;
    }
  });
  return newObjArray;
}

export function calculateYearlyPrice(objArray) {
  const newObjArray = objArray.map((obj) => {
    return {
      ...obj,
      price: obj.price * 10,
    };
  });
  return newObjArray;
}
