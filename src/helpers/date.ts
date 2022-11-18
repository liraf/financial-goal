// TODO: Create unit tests
/**
 * Returns date one year ahead of now on the first day of the month
 * 
 * @returns date
 */
export const getMonthOneYearAhead = () => {
  const date = new Date()
  date.setDate(1)
  date.setFullYear(new Date().getFullYear() + 1)
  return date
}

// TODO: Create unit tests
/**
 * Returns month string by date string
 * 
 * @param dateString
 * @returns monthName
 */
export const getMonthByString = (dateString: string) => {
  const date = new Date(dateString)
  const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return monthsNames[date.getMonth()]
}

// TODO: Create unit tests
/**
 * Returns if date is on same or previous month than today
 * 
 * @param date 
 * @returns isSameOrPreviousMonth
 */
export const isSameOrPreviousMonth = (date: Date) => {
  const today = new Date()
  const isPreviousYear = date.getFullYear() < today.getFullYear()
  const isSameYear = date.getFullYear() === today.getFullYear()
  const isPreviousOrSameMonth = date.getMonth() <= today.getMonth()

  return isPreviousYear || (isSameYear && isPreviousOrSameMonth)
}

// TODO: Create unit tests
/**
 * Returns month amount difference between two dates
 * 
 * @param date1 
 * @param date2 
 * @returns months
 */
export const getMonthDiff = (date1: Date, date2: Date) => {
  let months
  months = (date2.getFullYear() - date1.getFullYear()) * 12
  months -= date1.getMonth()
  months += date2.getMonth()
  return months <= 0 ? 0 : months
}