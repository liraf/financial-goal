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

// TODO: Create fn description and tests
export const isSameOrPreviousMonth = (date: Date) => {
  const today = new Date()
  const isPreviousYear = date.getFullYear() < today.getFullYear()
  const isSameYear = date.getFullYear() === today.getFullYear()
  const isPreviousOrSameMonth = date.getMonth() <= today.getMonth()

  return isPreviousYear || (isSameYear && isPreviousOrSameMonth)
}