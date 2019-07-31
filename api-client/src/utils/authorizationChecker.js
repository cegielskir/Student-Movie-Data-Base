import React from 'react';

const ACCESS_TOKEN = localStorage.getItem('accessToken');

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + ACCESS_TOKEN,
    })

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response =>
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

const getCurrentUser = () =>  {
    if(!ACCESS_TOKEN) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: "http://agh.codetype.pl:5000/user/me",
        method: 'GET'
    })
    .then(response => {
        userRole = response.roles[0].name;
        return response.roles[0].name;
    }).catch(error => {
        console.log(error);
    });
}
