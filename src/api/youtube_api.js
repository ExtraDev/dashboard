const axios = require("axios");

const base_url = " https://www.googleapis.com/youtube/v3";
const token ="570833006615-q5i8adq5gedc5db0034fp9m03h0sd8an.apps.googleusercontent.com";

const getSubscriptionFeed = () => axios.get(`${base_url}/subscriptions?access_token=${token}`, {
    params: {
        'mine': 'true',
        'part': 'snippet,contentDetails'
    }
});

export default {
    getSubscriptionFeed
}