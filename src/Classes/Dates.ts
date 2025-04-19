// Get the current date
export const today = new Date();
export const thisMonth = today.getMonth() + 1;
export const thisYear = today.getFullYear();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Calculate start and end dates for the current month
export const datumPocetka = new Date(thisYear, thisMonth, 1);
export const datumZavrsetka = new Date(thisYear, thisMonth + 1, 0);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Calculate the number of days in the current month
export const daysInMonth = new Date(thisYear, thisMonth, 0).getDate();

// Get the weekday of the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
export const firstDayOfMonth = new Date(thisYear, thisMonth, 1).getDay();

// Calculate the number of empty slots before the first day (if first day is 3rd day of the week, we need 2 empty slots)
export const emptySlots = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Adjust for Monday being first day
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create an array of days for the current month
export const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

// Prepend empty slots to the beginning of the array
export const calendarArray = [...Array(emptySlots).fill(null), ...daysArray];

export const daysOfWeek = [
  "Ponedeljak",
  "Utorak",
  "Sreda",
  "Cetvrtak",
  "Petak",
  "Subota",
  "Nedelja",
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DATE FORMATING
export function formatDateToDots(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0"); // Get day, pad with leading zero if needed
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month (0-11), add 1, pad with leading zero
  const year = date.getFullYear(); // Get full year

  return `${day}.${month}.${year}`;
}
