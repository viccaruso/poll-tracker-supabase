import { homeRedirect, logout } from '../fetch-utils.js';
//import {  } from '../render-utils.js';

const logoutButtonEl = document.querySelector('#logout-button');
const optionOneVoteButton = document.querySelector('#vote-one');
const optionTwoVoteButton = document.querySelector('#vote-two');

const currentPollFormEl = document.querySelector('form');
const currentQuestionEl = document.querySelector('#current-question');
const optionOneLabelEl = document.querySelector('#option-one-text');
const optionTwoLabelEl = document.querySelector('#option-two-text');
const optionOneVoteCountEl = document.querySelector('#option-one-votes');
const optionTwoVoteCountEl = document.querySelector('#option-two-votes');

// State
let voteOneCount = 0;
let voteTwoCount = 0;
let question = '';
let optionOneLabel = '';
let optionTwoLabel = '';

window.addEventListener('load', async() => {
    homeRedirect();
    
    logoutButtonEl.addEventListener('click', async() => {
        await logout();
    });
    
    currentPollFormEl.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(currentPollFormEl);
        question = data.get('question');
        optionOneLabel = data.get('option-one-input');
        optionTwoLabel = data.get('option-two-input');
    
        currentQuestionEl.textContent = question;
        optionOneLabelEl.textContent = optionOneLabel;
        optionTwoLabelEl.textContent = optionTwoLabel;
    
        currentPollFormEl.reset();
    });
    
    optionOneVoteButton.addEventListener('click', () => {
        voteOneCount++;
        optionOneVoteCountEl.textContent = voteOneCount;
    });
    
    optionTwoVoteButton.addEventListener('click', () => {
        voteTwoCount++;
        optionTwoVoteCountEl.textContent = voteTwoCount;
    });
});

