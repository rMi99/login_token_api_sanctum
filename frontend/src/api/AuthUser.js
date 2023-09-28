import axios from 'axios';
// const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;


export default function AuthUser(){
   const http = axios.create({
    baseURL: 'http://localhost:8000/api', 
    headers: {
      // 'X-CSRF-TOKEN': csrfToken,
      'Content-Type': 'application/json', 
    },
    
  });
  return {
    http
  }
 
}
