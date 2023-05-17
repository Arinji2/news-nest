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

export const getCountryCode = (country: string) => {
  var code = "in";
  if (country === "India") code = "in";
  else if (country === "Australia") code = "au";
  else if (country === "Belgium") code = "be";
  else if (country === "France") code = "fr";
  else if (country === "Germany") code = "de";
  else if (country === "Japan") code = "jp";
  else if (country === "New-Zealand") code = "nz";
  else if (country === "Serbia") code = "rs";
  else if (country === "United-Kingdom") code = "gb";
  else if (country === "United-States") code = "us";
  return code;
};
