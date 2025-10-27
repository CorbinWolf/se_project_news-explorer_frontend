import { request } from "./api";
import { baseUrl, headers, getAuthHeaders } from "./constants";

export const signup = (email, password, username) => {
  return request(baseUrl, "/signup", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      email,
      password,
      username,
    }),
  });
};

export const signin = (email, password) => {
  return request(baseUrl, "/signin", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

export const tokenCheck = () => {
  return request(baseUrl, "/users/me", {
    method: "GET",
    headers: getAuthHeaders(),
  });
};
