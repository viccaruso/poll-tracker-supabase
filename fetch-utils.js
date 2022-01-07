const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwOTAyMSwiZXhwIjoxOTU1MDg1MDIxfQ.v4B-VNkc9Xc9bIM4ig0BrZcgdU2bqx3VGiJiMMYNcis';

const SUPABASE_URL = 'https://iddyxpegdpnmmnebvghi.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPolls() {
    const response = await client
        .from('polls')
        .select()
        .order('id', { ascending: false });

    return response.data;
}

export async function createPoll(poll) {
    const response = await client
        .from('polls')
        .insert([
            {
                question: poll.question,
                option_1: poll.option_1,
                option_2: poll.option_2,
                option_1_count: poll.option_1_count,
                option_2_count: poll.option_2_count
            }
        ]);
    return response.data;
}

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

// Redirect to home page if no active user session
export async function homeRedirect() {
    if (!await getSession()) {
        window.location.href = '../';
    }
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