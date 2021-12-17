import { logout } from '../fetch-utils.js';
import {  } from '../render-utils.js';

const logoutButtonEl = document.querySelector('#logout-button');
const optionOneVoteButton = document.querySelector('#vote-one');
const optionTwoVoteButton = document.querySelector('#vote-two');
const optionOneVoteCountEl = document.querySelector('#option-one-text');
const optionTwoVoteCountEl = document.querySelector('#option-two-text');
const currentPollContainerEl = document.querySelector('#current-poll-container');
const pastPollsContainerEl = document.querySelector('#past-polls-container');

// State
let voteOneCount = 0;
let voteTwoCount = 0;

window.addEventListener('load', async() => {
    
    
});

logoutButtonEl.addEventListener('click', async() => {
    await logout();
});

optionOneVoteButton.addEventListener('click', () => {
    voteOneCount++;
    optionOneVoteCountEl.textContent = voteOneCount;
});

optionTwoVoteButton.addEventListener('click', () => {
    voteTwoCount++;
    optionTwoVoteCountEl.textContent = voteTwoCount;
});