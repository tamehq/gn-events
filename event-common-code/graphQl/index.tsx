import {ApolloClient} from "apollo-client";
import {HttpLink} from "apollo-link-http";
import ApolloBoostClient from "apollo-boost";
import AsyncStorage from "@react-native-community/async-storage";
import Config from "../config";
import {InMemoryCache} from "apollo-cache-inmemory";
const cache = new InMemoryCache();

const CLIENT_ROOT = {
  tags: !__DEV__
    ? 'https://production.api.tame.events/custom/tag/graphql'
    : 'https://staging.api.tame.events/custom/tag/graphql',
  companies: !__DEV__
    ? 'https://production.api.tame.events/contacts/companies/graphql'
    : 'https://staging.api.tame.events/contacts/companies/graphql',
  customFields: !__DEV__
    ? 'https://production.api.tame.events/custom/custom-fields/graphql'
    : 'https://staging.api.tame.events/custom/custom-fields/graphql',
  customization: !__DEV__
    ? 'https://production.api.tame.events/custom/customization/graphql'
    : 'https://staging.api.tame.events/custom/customization/graphql',
  orders: !__DEV__
    ? 'https://production.api.tame.events/orders/graphql'
    : 'https://staging.api.tame.events/orders/graphql',
  programme: !__DEV__
    ? 'https://production.api.tame.events/events/programme/graphql'
    : 'https://staging.api.tame.events/events/programme/graphql',
  events: !__DEV__
    ? 'https://production.api.tame.events/events/graphql'
    : 'https://staging.api.tame.events/events/graphql',
  feed: !__DEV__
    ? 'https://production.api.tame.events/events/feed/graphql'
    : 'https://staging.api.tame.events/events/feed/graphql'
};

// Create the client as outlined in the setup guide
export const client = new ApolloClient({
  link: new HttpLink({uri: CLIENT_ROOT.orders}),
  cache,
});

export const TagsClient = new ApolloBoostClient({
  uri: CLIENT_ROOT.tags,
});

export const FeedClient = new ApolloBoostClient({
  uri: CLIENT_ROOT.feed,
  request: async operation => {
    const token = await AsyncStorage.getItem('token');
    // console.log('favsss token', `"Bearer ${token}"`, token);
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
});

export const ProgrammeClient = new ApolloBoostClient({
  uri: CLIENT_ROOT.programme,
  request: async operation => {
    const token = await AsyncStorage.getItem('token');
    console.log('favsss token', `"Bearer ${token}"`, token);
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
});

export const EventClient = new ApolloBoostClient({
  uri: CLIENT_ROOT.events,
  request: async operation => {
    const token = await AsyncStorage.getItem('token');
    console.log('favsss token', `"Bearer ${token}"`, token);
    operation.setContext({
      headers: {
        authorization: `Bearer ${Config.apolloToken}`,
      },
    });
  },
});

export const CompanyClient = new ApolloBoostClient({
  uri: CLIENT_ROOT.companies,
});
