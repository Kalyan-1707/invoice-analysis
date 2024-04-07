import axios from "axios";

const BASE_URL = "https://8af6-152-15-112-68.ngrok-free.app";
//api axios call for auth
async function auth({email,name,type,image}){

    try {
        const response = await axios.post(BASE_URL + '/auth', {
            email,
            name,
            type,
            image
        });
        console.log('Response:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
    }
}

export default api ={
    auth: auth
}