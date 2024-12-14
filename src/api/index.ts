import axios from "axios";

const api_viacep = axios.create({
  baseURL: "http://viacep.com.br/ws",
});

const api_news = axios.create({
    baseURL: "http://localhost:3000",
  });

export {api_viacep, api_news};