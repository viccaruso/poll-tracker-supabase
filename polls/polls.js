import { logout } from '../fetch-utils.js';
import {  } from '../render-utils.js';

const logoutButtonEl = document.querySelector('#logout-button');
const currentPollContainerEl = document.querySelector('#current-poll-container');
const pastPollsContainerEl = document.querySelector('#past-polls-container');

// State

window.addEventListener('load', async() => {
    
    
});

logoutButtonEl.addEventListener('click', async() => {
    await logout();
});

