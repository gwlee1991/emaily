import axios from 'axios';
 
export const getCurrentUser = async () => {
    const response = await axios.get("/api/current_user");
    return response.data;
}
