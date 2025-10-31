export const request = (url, endpoint, options) => {
  return fetch(`${url}${endpoint}`, options).then(checkResponse);
};

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};
