// day
// const dayIndex: number = new Date().getDay();
// const getDayName = (dayIndex: number): string => {
//   const days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   return days[dayIndex];
// };
// const dayName: string = getDayName(dayIndex);

// month

const monthIndex: number = new Date().getMonth();
const getMonthName = (monthIndex: number): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ];
  return months[monthIndex];
};
const monthName: string = getMonthName(monthIndex);

const date = new Date();
const todayDate = `${monthName} ${date.getDate()}, ${date.getFullYear()}`;

export default todayDate;
