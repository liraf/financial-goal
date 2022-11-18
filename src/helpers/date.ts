// TODO: Create fn description and tests
export const getMonthOneYearAhead = () => {
  const date = new Date()
  date.setDate(1)
  date.setFullYear(new Date().getFullYear() + 1)
  return date
}

// TODO: Create fn description and tests
export const getMonthByString = (dateString: string) => {
  const date = new Date(dateString)
  const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return monthsNames[date.getMonth()]
}
