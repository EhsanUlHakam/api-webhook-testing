require('dotenv').config();

const config = {
    baseUrl: process.env.BASE_URL || 'https://eogf20v62ptn1jn.m.pipedream.net',
    endpoints: {
        webhook: process.env.WEBHOOK_ENDPOINT || '/webhook-endpoint',
        webhookDemo: process.env.WEBHOOK_ENDPOINT || '/demo1',
    },
};

module.exports = config;
