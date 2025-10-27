export const apiKey = "fdba8495e6004ba796580cf42cf357de";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://corbinwolf.github.io/se_project_news-explorer_frontend/"
    : "http://localhost:3001";
export const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export const headers = {
  "Content-Type": "application/json",
};
export const getAuthHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  "Content-Type": "application/json",
});
