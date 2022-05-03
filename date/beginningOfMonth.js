/**
* Returns a date set to the begining of the month
*
* @param {Date} myDate
* @returns {Date}
*/

// function beginningOfMonth(myDate){
//   let date = new Date(myDate);
//   date.setDate(1)
//   date.setHours(0);
//   date.setMinutes(0);
//   date.setSeconds(0);
//   return date;
// }


// const end = dayjs().add(1, 'month').endOf('month').subtract(4, 'hours').unix();

const beginningOfMonth = () => {
  const now = new Date();
  const endOfTheMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const test = new Date(endOfTheMonth).toISOString();

  console.log(test);
};

beginningOfMonth();
