const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwOTAyMSwiZXhwIjoxOTU1MDg1MDIxfQ.v4B-VNkc9Xc9bIM4ig0BrZcgdU2bqx3VGiJiMMYNcis';

const SUPABASE_URL = 'https://iddyxpegdpnmmnebvghi.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// User signup
export async function userSignup(email, password) {
    const response = await client.auth.signUp(
        {
            email: email,
            password: password
        }
    );
    return response.user;

}

// User login
export async function userLogin(email, password) {
    const response = await client.auth.signIn(
        {
            email: email,
            password: password
        }
    );

    return response.user;
}

// Check for active session
export async function getSession() {
    return client.auth.session();
}

// Redirect to polls page if user session active
export async function pollsRedirect() {
    if (await getSession()) {
        window.location.href = './polls';
    }
}

// Log out
export async function logout() {
    await client.auth.signOut();

    window.location.href = '../';
}