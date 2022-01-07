import { homeRedirect, logout, getPolls, createPoll } from '../fetch-utils.js';

const logoutButtonEl = document.querySelector('#logout-button');
const optionOneVoteButton = document.querySelector('#vote-one');
const optionTwoVoteButton = document.querySelector('#vote-two');
const closePollButton = document.querySelector('#close-poll');

const currentPollFormEl = document.querySelector('form');
const currentQuestionEl = document.querySelector('#current-question');
const optionOneLabelEl = document.querySelector('#option-one-text');
const optionTwoLabelEl = document.querySelector('#option-two-text');
const optionOneVoteCountEl = document.querySelector('#option-one-votes');
const optionTwoVoteCountEl = document.querySelector('#option-two-votes');
const pastPollsDivEl = document.querySelector('#past-polls-container');

// State
let voteOneCount = 0;
let voteTwoCount = 0;
let question = '';
let optionOneLabel = '';
let optionTwoLabel = '';

window.addEventListener('load', async() => {
    homeRedirect();
    displayAllPolls();
});

currentPollFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(currentPollFormEl);
    question = data.get('question');
    optionOneLabel = data.get('option-one-input');
    optionTwoLabel = data.get('option-two-input');

    displayCurrentPollEl();

    optionOneVoteButton.removeAttribute('hidden');
    optionTwoVoteButton.removeAttribute('hidden');
    closePollButton.removeAttribute('hidden');

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

closePollButton.addEventListener('click', async() => {
    const poll = {
        question: question,
        option_1: optionOneLabel,
        option_2: optionTwoLabel,
        option_1_count: voteOneCount,
        option_2_count: voteTwoCount
    };
    await createPoll(poll);

    resetCurrentPoll();

    displayAllPolls();
});

logoutButtonEl.addEventListener('click', async() => {
    await logout();
});

async function displayAllPolls() {
    const polls = await getPolls();

    while (pastPollsDivEl.firstChild) {
        pastPollsDivEl.firstChild.remove();
    }

    for (let poll of polls) {
        const pollEl = renderPoll(poll);
        if (poll === polls[0]) {
            pollEl.classList.add('most-recent');
        }
        pastPollsDivEl.append(pollEl);
    }
}

function renderPoll(poll) {
    const div = document.createElement('div');
    const titleP = document.createElement('p');
    const option1P = document.createElement('p');
    const option2P = document.createElement('p');

    titleP.textContent = poll.question;
    option1P.textContent = `${poll.option_1}: ${poll.option_1_count}`;
    option2P.textContent = `${poll.option_2}: ${poll.option_2_count}`;
    div.append(titleP, option1P, option2P);
    div.classList.add('past-poll');
    return div;
}

function displayCurrentPollEl() {
    currentQuestionEl.textContent = question;
    optionOneLabelEl.textContent = optionOneLabel;
    optionTwoLabelEl.textContent = optionTwoLabel;
}

function resetCurrentPoll() {
    optionOneVoteButton.setAttribute('hidden', true);
    optionTwoVoteButton.setAttribute('hidden', true);
    closePollButton.setAttribute('hidden', true);
    currentQuestionEl.textContent = '';
    optionOneLabelEl.textContent = '';
    optionTwoLabelEl.textContent = '';
    optionOneVoteCountEl.textContent = '';
    optionTwoVoteCountEl.textContent = '';
    voteOneCount = 0;
    voteTwoCount = 0;
    question = '';
    optionOneLabel = '';
    optionTwoLabel = '';
}