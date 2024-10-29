const axios = require('axios');
const logger = require('../../utils/logger');
const config = require('../../../config/index');

const BASE_URL = config.baseUrl; // Change to your actual base URL


async function makeHttpPost(endpoint, payload, headers = {}) {
    try {
        const response = await axios.post(`${BASE_URL}${endpoint}`, payload, {
            headers: {
                'User-Agent': 'pipedream/1',
                'Content-Type': 'application/json',
                ...headers,
            },
        });
        return response;
    } catch (error) {
        logger.error(`Error making POST request to ${endpoint}: ${error.message}`);
        throw error; // Re-throw to handle in test
    }
}

module.exports = {makeHttpPost};
