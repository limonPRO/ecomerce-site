import axios from "axios"
const apiClient = axios.create({
    baseURL:"https://dummyjson.com/"
    
});

export const get = async (endpoint: string) => {
    const response = await apiClient.get(endpoint);
    return response.data
};

export const post = async (endpoint: string, data:any  ) => {
    return await apiClient.post(endpoint, data)
};
