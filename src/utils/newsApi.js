import { checkResponse } from "./api";
import { apiKey, newsApiBaseUrl } from "./constants";

export const getNews = (search) => {
  const params = new URLSearchParams({
    q: search,
    apiKey: apiKey,
    language: "en",
    sortBy: "publishedAt",
    pageSize: "20",
  });

  return fetch(`${newsApiBaseUrl}?${params.toString()}`).then(checkResponse);
};

export const filterNewsData = (data) => {
  return data.map((item) => {
    const result = {};

    result.key = item.url;
    result.url = item.url;
    result.image = item.urlToImage;
    result.date = getDate(item.publishedAt);
    result.title = item.title;
    result.desc = item.content;
    result.publisher = item.source.name;

    return result;
  });
};

const getDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
