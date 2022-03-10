import axios from "axios";

const baseURL = "https://nc-news-example-seminar-2-1.herokuapp.com/api";

export const getArticles = (topic) => {
  return axios
    .get(`${baseURL}/articles`, { params: { topic } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then((res) => {
    return res.data.topics;
  });
};

export const getArticlesByID = (id) => {
  return axios.get(`${baseURL}/articles/${id}`).then(({ data }) => {
    console.log("FROM API==>", data.article);
    return data.article;
  });
};
