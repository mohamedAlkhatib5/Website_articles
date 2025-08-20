import { API_Details } from './Apis';

export const fetchBlogById = async(id, headers = {}) => {
    const url = API_Details(id);

    const response = await fetch(url, { headers });

    if (!response.ok) {
        throw new Error('Failed to fetch article');
    }

    const data = await response.json(); 
    return  data;
};