import { API_Articles } from './Apis';

export async function fetchBlogs(headers = {}) {
    let allBlogs = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
        const response = await fetch(API_Articles.BLOGS(page), {
            method: 'GET',
            headers: {
                ...headers,
                'Content-Type': 'application/json',
                cache: 'no-store',
            },
        });

        if (!response.ok) {
            throw new Error(Error `${response.status }: ${response.statusText }`);
        }

        const data = await response.json();
        const blogs = data.rows || [];

        allBlogs = [...allBlogs, ...blogs];

        // لو رجع أقل من 50 يعني انتهت المقالات
        hasMore = blogs.length === 50;
        page++;
    }

    return  allBlogs;
}