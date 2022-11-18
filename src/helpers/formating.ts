// TODO: Create fn description and tests
export const formatToCurrency = (number: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    currency: "USD"
  });

  return formatter.format(number);
}
