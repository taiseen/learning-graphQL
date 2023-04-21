// all local storage related operations...

export const setToken = token => localStorage.setItem('token', token);

export const getToken = _ => localStorage.getItem('token');

export const clearToken = _ => localStorage.removeItem('token');