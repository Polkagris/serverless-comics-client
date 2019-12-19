export default {
    s3: {
        REGION: "us-east-1",
        BUCKET: "comics-or-image-app-upload"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://im59m8y6v4.execute-api.us-east-2.amazonaws.com/prod/"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_jh3Inca7w",
        APP_CLIENT_ID: "1oc5hek9qroku61kbpeu3jmaub",
        IDENTITY_POOL_ID: "us-east-2:d29183c1-0408-4da4-8c4c-dbed9509984c"
    }
};