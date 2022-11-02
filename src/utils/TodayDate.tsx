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
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[monthIndex];
};
const monthName: string = getMonthName(monthIndex);

const date = new Date();
const todayDate = ` ${date.getDate()} ${monthName} , ${date.getFullYear()}`;

export default todayDate;
