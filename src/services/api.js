import axios from "axios";

//rota filmes
//r-api/?api=filmes

const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com/'
})

export default api;
