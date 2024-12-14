import axios from "axios";

const api_viacep = axios.create({
  baseURL: "http://viacep.com.br/ws",
});

const api_php = axios.create({
    baseURL: "http://viacep.com.br/ws",
  });

export {api_viacep, api_php};