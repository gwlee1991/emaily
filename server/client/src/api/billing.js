import axios from 'axios';

export const updateCredit = async token => {
    const response = await axios.post('/api/stripe', token);
    return response.data;
}