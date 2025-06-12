// Create a single Date instance to work with
const now = new Date();

// Arrays to map the zero-indexed values to names
const monthNames = [
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
