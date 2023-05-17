import { getCurrentDate, getPrevDate } from "./helperFunctions";

export const handleCountryDataFetch = async (code: string) => {
  const date = getCurrentDate();
  const prev = getPrevDate();

  const res = await fetch(
    `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API}&limit=5&countries=${code}&date=${prev},${date}&sort=published_desc`,
    { next: { revalidate: 1440 } }
  );

  const data = await res.json();

  return data;
};

export const handleCategoryDataFetch = async (category: string) => {
  const date = getCurrentDate();
  const prev = getPrevDate();

  const res = await fetch(
    `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API}&limit=5&countries=us&categories=${category}&date=${prev},${date}&sort=published_desc`,
    { next: { revalidate: 1440 } }
  );

  const data = await res.json();

  return data;
};

export const handleSearchDataFetch = async (search: string) => {
  const date = getCurrentDate();
  const prev = getPrevDate();

  const res = await fetch(
    `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API}&limit=5&countries=us&keywords=${search}&date=${prev},${date}&sort=published_desc`,
    { next: { revalidate: 1440 } }
  );

  const data = await res.json();

  return data;
};
export const handleLanguageDataFetch = async (language: string) => {
  const date = getCurrentDate();
  const prev = getPrevDate();

  const res = await fetch(
    `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API}&limit=5&languages=${language}&date=${prev},${date}&sort=published_desc`,
    { next: { revalidate: 1440 } }
  );

  const data = await res.json();

  return data;
};
