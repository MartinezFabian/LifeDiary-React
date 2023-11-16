/* eslint-disable no-undef */
import 'whatwg-fetch';

require('dotenv').config({
  path: '.env.test',
});

jest.mock('./src/utils/getEnvironments', () => {
  return {
    getEnvironments: () => {
      return {
        ...process.env,
      };
    },
  };
});
