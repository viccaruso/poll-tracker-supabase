import { logout } from '../fetch-utils.js';
const logoutButtonEl = document.querySelector('#logout-button');

logoutButtonEl.addEventListener('click', async() => {
    await logout();
});