import { API_Testimonials } from './Apis';
export const getTestimonials = async() => {
    try {
        const res = await fetch(API_Testimonials, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        return  [];  
    }
};