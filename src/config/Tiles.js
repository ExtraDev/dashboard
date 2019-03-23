export default {
    List: [{
        title: "Weather",
        img: "./images/icons/sunny.png",
        component: "WeatherTile",
    }, {
        title: "RTS Un",
        img: "./images/icons/rts-1.png",
        component: "RTSLiveTVTile",
        channel_id: 1,
        channel_src: "https://player.rts.ch/p/rts/portal-detail?urn=urn:rts:video:1967124&amp;autoplay=true"
    }, {
        title: "RTS Deux",
        img: "./images/icons/rts-2.png",
        component: "RTSLiveTVTile",
        channel_id: 2,
        channel_src: "https://player.rts.ch/p/rts/portal-detail?urn=urn:rts:video:1967124&amp;autoplay=true"
    }, {
        title: "La 1ère",
        img: "./images/icons/rts-radio-1.png",
        component: "RTSLiveRadioTile",
        radio_src: "//tp.srgssr.ch/p/srf/embed?urn=urn:rts:audio:3262363&start="
    }, {
        title: "Espace 2",
        img: "./images/icons/rts-radio-2.png",
        component: "RTSLiveRadioTile",
        radio_src: "//tp.srgssr.ch/p/srf/embed?urn=urn:rts:audio:3262363&start="
    }, {
        title: "Couleur 3",
        img: "./images/icons/rts-radio-3.png",
        component: "RTSLiveRadioTile",
        radio_src: "//tp.srgssr.ch/p/srf/embed?urn=urn:rts:audio:3262363&start="
    }, {
        title: "YoutubeFeed",
        img: "./images/icons/youtube.png",
        component: "YoutubeFeedTile",
    }]
}