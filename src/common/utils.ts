export const getDateAfterThirtyDays = () => {
  let date = new Date(); // Now
  date.setDate(date.getDate() + 30); // Set now + 30 days as the new date
  return date;
};

export const getFormattedDate = (date: Date)=>{
    return  new Date(date).toISOString()
}
