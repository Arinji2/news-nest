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
  if (country === "INDIA") code = "in";
  else if (country === "USA") code = "us";
  else if (country === "CHINA") code = "cn";
  else if (country === "CANADA") code = "ca";
  else if (country === "RUSSIA") code = "ru";
  else if (country === "SOUTH AFRICA") code = "sa";
  return code;
};

export const getCountry = (code: string) => {
  var country;
  if (code === "in") country = "INDIA";
  else if (code === "us") country = "USA";
  else if (code === "cn") country = "CHINA";
  else if (code === "ca") country = "CANADA";
  else if (code === "ru") country = "RUSSIA";
  else if (code === "sa") country = "SOUTH AFRICA";
  else country = null;
  return country;
};

export const getLanguageCode = (language: string) => {
  var code = "en";
  if (language === "English") code = "en";
  else if (language === "Arabic") code = "ar";
  else if (language === "German") code = "de";
  else if (language === "Spanish") code = "es";
  else if (language === "French") code = "fr";
  else if (language === "Italian") code = "it";
  else if (language === "Russian") code = "ru";
  else if (language === "Chinese") code = "zh";

  return code;
};
