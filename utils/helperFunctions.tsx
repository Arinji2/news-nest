export const getCurrentDate = () => {
  const currentDate = new Date();
  const date = currentDate.getDate();
  let month = currentDate.getMonth() + 1; // Increment month by 1
  const year = currentDate.getFullYear();
  const dateString = `${year}-${month.toString().padStart(2, "0")}-${date
    .toString()
    .padStart(2, "0")}`;
  return dateString;
};

export const getPrevDate = () => {
  const currentDate = new Date();
  const date = currentDate.getDate() - 1;
  let month = currentDate.getMonth() + 1; // Increment month by 1
  const year = currentDate.getFullYear();
  const dateString = `${year}-${month.toString().padStart(2, "0")}-${date
    .toString()
    .padStart(2, "0")}`;
  return dateString;
};
