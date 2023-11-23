import axios from "axios";

const api = axios.create({
  baseURL: 'https://nature-ai-api.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export function postDicas(data) {
  return api.post('/dicas', data)
    .then(response => {
      alert("Dica enviada com sucesso!")
      return response.data; 
    })
    .catch(error => {
      throw error;
    });
}

export function getDicas() {
  return api.get(`/dicas`)
    .then(response => {
      return response.data; 
    })
    .catch(error => {
      throw error;
    });
}