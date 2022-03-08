import axios from "axios";

const baseURL = "https://nc-news-example-seminar-2-1.herokuapp.com/api";

export const getArticles = () => {
  return axios.get(`${baseURL}/articles`).then(({ data }) => {
    console.log(data.articles);
    return data.articles;
  });
};
