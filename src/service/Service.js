import axios from "axios";

const httpClient = axios.create({
    // baseURL: "https://ecommerce-practise-xb13.onrender.com/api/auth",
    baseURL: 'http://localhost:8020/api/auth',
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

// Request interceptor to add token
httpClient.interceptors.request.use(
    (config) => {
        // Try to get token from sessionStorage (or switch to localStorage if you want persistence)
        const token = localStorage.getItem("token");

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        } else {
            console.warn("No token found in localStorage");
        }

        // Ensure Content-Type is set
        if (!config.headers["Content-Type"]) {
            config.headers["Content-Type"] = "application/json";
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default httpClient;
