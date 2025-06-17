// Create a single Date instance to work with
const now = new Date();

// Arrays to map the zero-indexed values to names
export const monthNames = [
  "Januar",
  "Februar",
  "Mart",
  "April",
  "Maj",
  "Jun",
  "Jul",
  "Avgust",
  "Septembar",
  "Oktobar",
  "Novembar",
  "Decembar",
];

const dayNames = [
  "Nedelja",
  "Ponedeljak",
  "Utorak",
  "Sreda",
  "Četvrtak",
  "Petak",
  "Subota",
];

// Extract all the data
const year = now.getFullYear(); // e.g., 2025
const monthNumber = now.getMonth() + 1; // Add 1 to be 1-indexed (1-12)
const monthName = monthNames[now.getMonth()]; // e.g., "June"
const dayNumber = now.getDate(); // e.g., 12
const dayName = dayNames[now.getDay()]; // e.g., "Thursday"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Export the data in a structured object
export const currentDate = {
  year,
  month: {
    number: monthNumber,
    name: monthName,
  },
  day: {
    number: dayNumber,
    name: dayName,
  },
};

// You can also export them individually if you prefer
export { year, monthNumber, monthName, dayNumber, dayName };

///////////////////////////////////////////////////////////////////////

//FUNCTION to make array of days:
export const getCurrentMonthDays = () => {
  const daysInMonth = new Date(year, monthNumber, 0).getDate();

  const monthDays = [];

  for (let i = 1; i <= daysInMonth; i++) {
    const loopDate = new Date(year, monthNumber - 1, i);
    monthDays.push({
      dayNumber: i,
      dayName: dayNames[loopDate.getDay()],
      date: loopDate,
      // Compare the loop day with the constant `dayNumber` from the top.
      isToday: i === dayNumber,
    });
  }

  return monthDays;
};

///////////////////////////////////////////////////////////////////////

// --- Our Custom Date Helper Functions (Typed) ---

/**
 * Formats the month and year (e.g., "Jun 2025") using the native Intl API.
 * @param date The date to format.
 * @param locale The locale string (e.g., 'sr-Latn', 'en-US').
 * @returns The formatted date string.
 */
export const formatMonthYear = (date: Date, locale: string): string => {
  const formatter = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  });
  const formatted = formatter.format(date);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

/**
 * Gets the first day of a given month.
 * @param date A date within the desired month.
 * @returns A new Date object set to the first day of the month.
 */
export const getStartOfMonth = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

/**
 * Gets the last day of a given month.
 * @param date A date within the desired month.
 * @returns A new Date object set to the last day of the month.
 */
export const getEndOfMonth = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

/**
 * Gets the Sunday that starts the week for a given date.
 * @param date The date to find the start of the week for.
 * @returns A new Date object set to the preceding Sunday.
 */
export const getStartOfWeek = (date: Date): Date => {
  const newDate = new Date(date);
  const dayOfWeek = newDate.getDay(); // 0 for Sunday
  newDate.setDate(newDate.getDate() - dayOfWeek);
  return newDate;
};

/**
 * Gets the Saturday that ends the week for a given date.
 * @param date The date to find the end of the week for.
 * @returns A new Date object set to the following Saturday.
 */
export const getEndOfWeek = (date: Date): Date => {
  const newDate = new Date(date);
  const dayOfWeek = newDate.getDay(); // 0 for Sunday
  newDate.setDate(newDate.getDate() + (6 - dayOfWeek));
  return newDate;
};

/**
 * Checks if two dates are in the same month and year.
 * @param date1 The first date.
 * @param date2 The second date.
 * @returns True if they are in the same month, false otherwise.
 */
export const isSameMonth = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth()
  );
};

/**
 * Checks if a date is today.
 * @param date The date to check.
 * @returns True if the date is today, false otherwise.
 */
export const isToday = (date: Date): boolean => {
  const today = new Date();
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
};

export const dayNamesShort: string[] = [
  "Ned",
  "Pon",
  "Uto",
  "Sre",
  "Čet",
  "Pet",
  "Sub",
];
