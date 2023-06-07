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

export const patch = async (endpoint: string, data:any  ) => {
    return await apiClient.patch(endpoint, data)
};

export const deleteApi = async (endpoint: string) => {
    return await apiClient.delete(endpoint)
};