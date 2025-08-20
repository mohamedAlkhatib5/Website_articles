const csrfToken = localStorage.getItem("csrf_token");
import { API_Users, API_deleteUser } from './Apis';

// ***********Users********************

export const fetchUsers = async() => {
    try {
        const res = await fetch(API_Users, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": csrfToken || "",
            },
            credentials: "include",
        });

        if (!res.ok) throw new Error("Unauthorized");
        const data = await res.json();
        return data.rows || [];
    } catch (error) {
        throw error;
    }
};
// ***********deleteUser********************

export const deleteUser = async(uid) => {
    try {
        const res = await fetch(API_deleteUser(uid), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": csrfToken || "",
            },
            credentials: "include",
        });

        if (!res.ok) throw new Error("Failed to delete user");
        return true;
    } catch (error) {
        throw  error;  
    }
};