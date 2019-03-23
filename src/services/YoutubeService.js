import axios from 'axios';

const base_url = "https://www.googleapis.com/youtube/v3";
const token = "570833006615-q5i8adq5gedc5db0034fp9m03h0sd8an.apps.googleusercontent.com";

let GoogleAuth;

export default {
    /*handleClientLoad() {
        gapi.load('client:auth2', initClient);
    },
    initClient() {
        // Initialize the gapi.client object, which app uses to make API requests.
        // Get API key and client ID from API Console.
        // 'scope' field specifies space-delimited list of access scopes

        gapi.client.init({
            'clientId': token,
            'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
            'scope': 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner'
        }).then(function () {
            GoogleAuth = gapi.auth2.getAuthInstance();

            // Listen for sign-in state changes.
            GoogleAuth.isSignedIn.listen(updateSigninStatus);

            // Handle initial sign-in state. (Determine if user is already signed in.)
            setSigninStatus();

            // Call handleAuthClick function when user clicks on "Authorize" button.
            document.getElementById("execute-request-button").click();
        });
    },

    handleAuthClick() {
        // Sign user in after click on auth button.
        GoogleAuth.signIn();
    },

    setSigninStatus() {
        var user = GoogleAuth.currentUser.get();
        isAuthorized = user.hasGrantedScopes('https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner');
        // Toggle button text and displayed statement based on current auth status.
        if (isAuthorized) {
            defineRequest();
        }
    },

    updateSigninStatus(isSignedIn) {
        setSigninStatus();
    },

    createResource(properties) {
        var resource = {};
        var normalizedProps = properties;
        for (var p in properties) {
            var value = properties[p];
            if (p && p.substr(-2, 2) == '[]') {
                var adjustedName = p.replace('[]', '');
                if (value) {
                    normalizedProps[adjustedName] = value.split(',');
                }
                delete normalizedProps[p];
            }
        }
        for (var p in normalizedProps) {
            // Leave properties that don't have values out of inserted resource.
            if (normalizedProps.hasOwnProperty(p) && normalizedProps[p]) {
                var propArray = p.split('.');
                var ref = resource;
                for (var pa = 0; pa < propArray.length; pa++) {
                    var key = propArray[pa];
                    if (pa == propArray.length - 1) {
                        ref[key] = normalizedProps[p];
                    } else {
                        ref = ref[key] = ref[key] || {};
                    }
                }
            };
        }
        return resource;
    },

    removeEmptyParams(params) {
        for (var p in params) {
            if (!params[p] || params[p] == 'undefined') {
                delete params[p];
            }
        }
        return params;
    },

    executeRequest(request) {
        request.execute(function (response) {
            console.log(response);
        });
    },

    buildApiRequest(requestMethod, path, params, properties) {
        params = removeEmptyParams(params);
        var request;
        if (properties) {
            var resource = createResource(properties);
            request = gapi.client.request({
                'body': resource,
                'method': requestMethod,
                'path': path,
                'params': params
            });
        } else {
            request = gapi.client.request({
                'method': requestMethod,
                'path': path,
                'params': params
            });
        }
        executeRequest(request);
    },

    defineRequest() {
        // See full sample for buildApiRequest() code, which is not 
        // specific to a particular API or API method.

        buildApiRequest('GET',
            '/youtube/v3/subscriptions',
            {
                'mine': 'true',
                'part': 'snippet,contentDetails'
            });

    },

    /*getSubscriptionFeed() {
        return axios.get(`${base_url}/subscriptions?access_token=${token}`, {
            params: {
                'mine': 'true',
                'part': 'snippet,contentDetails'
            }
        })
    },*/



}
