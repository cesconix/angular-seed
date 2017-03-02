const envName = process.env.NODE_ENV || 'development';
const apiServer = process.env.API_SERVER || 'development';

const { apiUrl } = require(`./${apiServer}`); // eslint-disable-line import/no-dynamic-require

const envConfig = require(`./${envName}`); // eslint-disable-line import/no-dynamic-require
envConfig.apiUrl = apiUrl;

module.exports = envConfig;
