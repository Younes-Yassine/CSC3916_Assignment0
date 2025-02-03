const axios = require('axios');

module.exports = async (phrase) => {
    try {
        const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                format: 'json',
                q: `${phrase}`
            }
        });

        
        const formattedObj = {
            data: results.data,
            status: results.status,
            statusText: results.statusText,
            headers: results.headers,
            requestHeader: results.config.headers
        };

        return formattedObj;
    } catch (error) {
        console.error("Error fetching book details:", error.message);
        throw error;
    }
};
