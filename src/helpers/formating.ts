// TODO: Create unit tests
/**
 * Returns string that represents the number in a currency format
 *
 * @param number
 * @returns currency
 */
export const formatToCurrency = (number: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    currency: 'USD'
  });

  return formatter.format(number);
};
