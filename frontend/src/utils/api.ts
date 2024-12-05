const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchData = async (endpoint: string) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("API request failed:", error);
        throw error;
    }
};
