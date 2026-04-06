import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/v1';

export const translateText = async (text, sourceLang, targetLang) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/translate`, {
            text,
            source_language: sourceLang,
            target_language: targetLang
        });
        return response.data;
    } catch (error) {
        console.error("Translation Error: ", error);
        throw error;
    }
};

export const detectLanguage = async (text) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/detect-language`, { text });
        return response.data;
    } catch (error) {
        console.error("Detection Error: ", error);
        throw error;
    }
};

export const getHistory = async (limit = 10, offset = 0) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/history`, {
            params: { limit, offset }
        });
        return response.data;
    } catch (error) {
        console.error("History Error: ", error);
        throw error;
    }
}
