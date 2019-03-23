import axios from 'axios';

const base_url = "https://www.googleapis.com/youtube/v3";

export default {
    getSubscription(page) {
        const googleAuth = JSON.parse(localStorage.googleAuth);
        const access_token = googleAuth.Zi.access_token;
        return axios.get(`${base_url}/subscriptions?access_token=${access_token}`, {
            params: {
                mine: "true",
                part: "snippet,contentDetails",
                maxResults: 5,
                //pageToken: page,
            }
        });
    },

    getChannelLatestVideos(channel) {
        const nbResultMax = 5;
        return axios.get(`${base_url}/activities`, {
            params: {
                channelId: channel,
                part: "snippet,contentDetails",
                maxResults: nbResultMax,
                key: process.env.VUE_APP_YOUTUBE_API_KEY,
            }
        });
    }



}
