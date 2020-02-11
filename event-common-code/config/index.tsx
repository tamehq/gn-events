const config = {
  FILESTACK_API_KEY: !__DEV__
    ? 'APFLFMtl8QlWLUZz6f5jpz'
    : 'AusrXwJOzSbq9bMZu1ztDz',
  API_BASE: !__DEV__
    ? 'https://europe-west1-tame-api-prod.cloudfunctions.net/gateway/v1'
    : 'https://europe-west1-tame-api-staging.cloudfunctions.net/gateway/v1', // `http://devel.arangodb.dev.tame.events:8529/_db/bleed/api`;  //95.85.6.231
  API_ROOT: !__DEV__
    ? 'https://europe-west1-tame-api-prod.cloudfunctions.net/gateway/v1/legacy'
    : 'https://europe-west1-tame-api-staging.cloudfunctions.net/gateway/v1/legacy', // `http://devel.arangodb.dev.tame.events:8529/_db/bleed/api`;  //95.85.6.231
  API_ROOT_USERS: !__DEV__
    ? 'https://europe-west1-tame-api-prod.cloudfunctions.net/gateway/v1/users'
    : 'https://europe-west1-tame-api-staging.cloudfunctions.net/gateway/v1/users', // `http://devel.arangodb.dev.tame.events:8529/_db/bleed/api`;  //95.85.6.231
  API_ROOT_NODE: !__DEV__
    ? 'https://europe-west1-tame-api-prod.cloudfunctions.net/gateway/v1/legacy'
    : 'https://europe-west1-tame-api-staging.cloudfunctions.net/gateway/v1/legacy',
  NEW_API_ROOT: !__DEV__
    ? 'https://europe-west1-tame-api-prod.cloudfunctions.net/gateway/v1/legacy'
    : 'https://europe-west1-tame-api-staging.cloudfunctions.net/gateway/v1/legacy',
  OPBEAT_ORG_ID: 'f68d9e678f394ea194423661046e47f9',
  OPBEAT_APP_ID: !__DEV__ ? '3c582a104a' : 'c2a3a7b793',
  stripeRedirectUri: !__DEV__
    ? 'https://connect.stripe.com/oauth/authorize?client_id=ca_A4jmbTj5f0zdljqHt8NoxrQUHsxir2qx&redirect_uri=https%3A%2F%2Ftame.events%2Fhooks%2Fstripe%2Fredirect&scope=read_write&response_type=code&state='
    : 'https://connect.stripe.com/oauth/authorize?client_id=ca_A4jmFLYhrZANwiN3IePhemcspQLwMv8d&redirect_uri=https%3A%2F%2Fdev.tame.events%2Fhooks%2Fstripe%2Fredirect&scope=read_write&response_type=code&state=',
  stripePubKey: !__DEV__
    ? 'pk_live_UCJEZtC8DH2Db8H67KTh1Kr3'
    : 'pk_test_6hVFzA5TiXd2Upje9fpnx2AA',

  // firebase
  apiKey: !__DEV__
    ? 'AIzaSyAaKqwXhYYPaBxkH7xOvFIQA9umMwZJ0rM'
    : 'AIzaSyBuTyi6mp8Dqc_BJj9cSPCr6DwXOF48y6s',
  authDomain: !__DEV__
    ? 'tame-api-prod.firebaseapp.com'
    : 'tame-api-staging.firebaseapp.com',
  projectId: !__DEV__ ? 'tame-api-prod' : 'tame-api-staging',
  // Apollo
  // @FIXME: These should not be hard coded here. We need to rotate new keys and save them in environment variables instead.
  apolloToken: !__DEV__
    ? '013c04e210014689ba354484ce55f729ec395b7d2dd92b5c12a6ec0bee4a16170fec80adc6a3989d9d46b7d3695a4a83889bc3d6be7a2d5b185f58bd53c8c347'
    : '913ac8b5eeffbc768da88323be875d628c3cd850191d5d4e4ce4571fa20706a4828f737f5f9aa77f9ea3cd5503efc3104127e41f0f74a2cd1b434346c64441d7',
  pdfKey: !__DEV__
    ? 'https://production.api.tame.events/orders/orderConfirmationTickets'
    : 'https://staging.api.tame.events/orders/orderConfirmationTickets',
  NEW_STAGING: !__DEV__
    ? 'https://production.api.tame.events'
    : 'https://staging.api.tame.events',
  EVENT_ID: '98729393', // NNIT EVENT ID 98729393
  FIREBASE_TOKEN:
    'z5MxdEeH2dK3q9fpbrfgxhR4YHKqANXRn35cmemQbfacgaJK32gXZepAbqJnQDBqhnQf4uYt2DTJKEEukWX7J7nJZQ9X3BGEWrm6wgK6WWtS7Skqa3WNrSuYRWR4m9quvtaTtcK3na7LFfx8J3RWKwcr4A8WDNEw63qQPwArQHhJ2qPWAaYUTA4TJWfwMz3LKt4AEu2BH4dBxNBuY7Z3xxs5Dz69YyaGfjFD9Jcq2JYmNFjr7BMPUzxZPXKW85epLLdcXmwzmjNbreTaNcMVnEq9fGuGUQhXwqgshfdjXCVbuGBRcU3gMdPUAy86bXaDXgEfQM6JMG9xTz9psxcV5jNBdpH2V3ejYP535sBXnAHqb2s7ukGghkJhz5nNxVQVHee8KHmwjqZ9sZfCHSdTE8G7RwsHKg2EjJJnjceqTrNPr9CuggKDjvKD7DpxanubpxCJqQ8s4dDhgJzpgZEpJJ9W9hYmBSPzmhUQsgQu7ySaf4qqqGM426RTZg22NX32',
};

export default config;
