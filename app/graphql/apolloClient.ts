import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { BASE_URL } from '../utils/config';

const client = new ApolloClient({
  link: new HttpLink({
    uri: BASE_URL,
  }),

  cache: new InMemoryCache({
    typePolicies: {
      /* Entity wrappers */
      RejoiceBlogsEntity: {
        keyFields: ['id'],
        fields: {
          attributes: { merge: true },
        },
      },
      ServicesEntity: {
        keyFields: ['id'],
        fields: {
          attributes: { merge: true },
        },
      },
      JobDetailsEntity: {
        keyFields: ['id'],
        fields: {
          attributes: { merge: true },
        },
      },
      CareerEntity: {
        keyFields: ['id'],
        fields: {
          attributes: { merge: true },
        },
      },
      LatestNewsEntity: {
        keyFields: ['id'],
        fields: {
          attributes: { merge: true },
        },
      },
      NewCaseStudyEntity: {
        keyFields: ['id'],
        fields: {
          attributes: { merge: true },
        },
      },
      OpenSourceEntity: {
        keyFields: ['id'],
        fields: {
          attributes: { merge: true },
        },
      },
      OpenSourceCategoryEntity: {
        keyFields: ['id'],
        fields: {
          attributes: { merge: true },
        },
      },

      /* Main content/attribute types */
      RejoiceBlogs: { keyFields: ['slug'] },
      Services: { keyFields: ['slug'] },
      JobDetails: { keyFields: ['slug'] },
      Career: { keyFields: ['slug'] },
      LatestNews: { keyFields: ['slug'] },
      NewCaseStudy: { keyFields: ['slug'] },
      OpenSource: { keyFields: ['slug'] },

      /* Category types */
      BlogsCategories: { keyFields: ['name'] },
      NoCodeToolCategory: { keyFields: ['name'] },
      OpenSourceCategory: { keyFields: ['categoryName'] },

      /* Response helpers */
      RejoiceBlogsEntityResponse: {
        fields: {
          attributes: { merge: true },
        },
      },
      UploadFileEntityResponse: {
        fields: {
          data: { merge: true },
        },
      },
    },
  }),

  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

export default client;
