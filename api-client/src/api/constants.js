export const ACCESS_TOKEN = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTYxMzk3ODgwLCJleHAiOjE1NjIwMDI2ODB9.G24HcZdtHPvZJYq_5wCDyc8w1j8xwKbyQ5jHGlZd9SWGNrjkH-5kDI-TYTTH5A5shlUuhjDob_gg-ogIhcX8DA';
export const API_BASE_URL = 'http://localhost:5000/api';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;