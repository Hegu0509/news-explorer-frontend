import {
  APIKey,
  baseURL,
  parseCurrentDate,
  parsePreviousWeek,
} from "./constants";

export const getSearchResult = (keyWord) => {
  if (!keyWord) {
    return Promise.reject(`Error: ${keyWord}`);
  }
  const processServerResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  };

  return fetch(
    `${baseURL}?q=${keyWord}&from=${parsePreviousWeek}&to=${parseCurrentDate}&pageSize=100&language=es&sortBy=popularity&apiKey=${APIKey}`
  )
    .then(processServerResponse)
    .then((res) => {
      return {
        ...res,
        articles: res.articles.filter(
          (article) => article.title != "[Removed]"
        ),
      };
    });
};
