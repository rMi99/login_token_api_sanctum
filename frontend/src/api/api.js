
import axios from 'axios';


const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');


const api = axios.create({
  baseURL: 'http://localhost:8000/api', 
  withCredentials: true,
  headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    common: {
      'X-CSRF-TOKEN': csrfToken,
    },
  },
});

export default api;

