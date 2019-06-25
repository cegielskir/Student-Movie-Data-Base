export const ACCESS_TOKEN = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNTYxNDA2NjIzLCJleHAiOjE1NjIyNzA2MjN9.KIz3vaLgnQ_oKz0qmIkFMBczkt6VMoBWi0mp-V6pf_ucneoDvRdsz8JjdMLtqC8dkoCV8xHGgNCHBPe8IHTLkA';
export const API_BASE_URL = 'http://localhost:5000/api';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;