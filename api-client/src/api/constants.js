// export const ACCESS_TOKEN = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNTYzOTkyODU5LCJleHAiOjE1NjQ4NTY4NTl9.SWmVKH5cq9UTFegjHNaP51xGdqSKHxTIKSiB5G9FX0cMEk3DHEN03GPtXmCdyUBIKkCIKK-DKyOt_p0hO5GNOg';
export const API_BASE_URL = 'http://localhost:5000/api';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;