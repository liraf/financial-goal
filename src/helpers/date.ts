// TODO: Create fn description and tests
export const getMonthOneYearAhead = () => {
  const date = new Date()
  date.setDate(1)
  date.setFullYear(new Date().getFullYear() + 1)
  return date
}
