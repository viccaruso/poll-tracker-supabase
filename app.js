// import functions and grab DOM elements
import { userLogin, userSignup, pollsRedirect } from './fetch-utils.js';

// Login and Signup forms
const loginFormEl = document.querySelector('#login-form');
const signupFormEl = document.querySelector('#signup-form');

// Check if a user is already signed in and if so, re-direct to polls page

// Handle Sign Up
signupFormEl.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(signupFormEl);
    const email = data.get('email');
    const pass = data.get('password');

    await userSignup(email, pass);

    pollsRedirect();
});
// Handle Login
loginFormEl.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(loginFormEl);
    const email = data.get('email');
    const pass = data.get('password');

    await userLogin(email, pass);

    pollsRedirect();
});

