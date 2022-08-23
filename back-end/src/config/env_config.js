require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
const CUSTOMER_BASE_URL = process.env.CUSTOMER_BASE_URL;
const CDN_CLOUD_NAME = process.env.CDN_CLOUD_NAME;
const CDN_API_KEY = process.env.CDN_API_KEY;
const CDN_API_SECRET = process.env.CDN_API_SECRET;
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;

module.exports = { 
    MONGO_URI, 
    PORT,
    CUSTOMER_BASE_URL,
    CDN_CLOUD_NAME,
    CDN_API_KEY,
    CDN_API_SECRET,
    PAYPAL_CLIENT_ID,
    PAYPAL_CLIENT_SECRET
};
