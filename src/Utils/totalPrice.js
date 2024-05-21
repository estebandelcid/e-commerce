/**
 * This function calculates the total price of a new order.
 * @param {Array} products cartProducts: Arrayof Objects.
 * @returns {number} Total price.
 */

export const totalPrice = (products) => {
  const initialValue = 0;
  const sumWithInitial = products.reduce(
    (acc, product) => acc + product.price,
    initialValue
  );
  const roundedResult = parseFloat(sumWithInitial.toFixed(2));
  return roundedResult;
};
