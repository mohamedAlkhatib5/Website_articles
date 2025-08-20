import { API_FaqList } from './Apis';

export const fetchFAQs = async() => {
    const response = await fetch(API_FaqList, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ FAQ fetch error:", errorText);
        throw new Error("Failed to fetch FAQs");
    }

    return await response.json();
};