export const phoneRegExp =
  /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/g;

export const fullNameRegExp =
  /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/g;

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
