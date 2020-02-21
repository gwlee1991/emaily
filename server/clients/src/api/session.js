import axios from 'axios';

export const getCurrentUser = async () => {
    const res = axios.get('/api/current_user');
    return (await res).data;
}