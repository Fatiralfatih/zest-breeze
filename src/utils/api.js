const BASE_URL = 'https://forum-api.dicoding.dev/v1';

function getAccessToken() {
    return localStorage.getItem('accessToken')
}

function putAccessToken(accessToken) {
    return localStorage.setItem('accessToken', accessToken);
}

async function fetchWithToken(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${getAccessToken()}`
        }
    });
}

async function fetchUserLogin({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data.token };
}

const fetchUserRegistered = async ({ email, name, password }) => {

    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password })
    })
    const responseJson = await response.json();
    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return { error: true }
    }

    return { error: false };
}

const fetchAllUser = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null }
    }

    return { error: false, data: responseJson.data.users };
}

const getUserLogged = async () => {
    const response = await fetchWithToken(`${BASE_URL}/users/me`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }
    return { error: false, data: responseJson.data.user };
}

const getAllThreads = async () => {
    const response = await fetch(`${BASE_URL}/threads`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }
    return { error: false, data: responseJson.data.threads };
}

const getThreadsById = async (id) => {
    const response = await fetch(`${BASE_URL}/threads/${id}`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data.detailThread }
}


const fetchCreateThread = async ({ title, body, category }) => {
    const response = await fetchWithToken(`${BASE_URL}/threads`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, body, category })
    })

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null }
    }

    return { error: false, data: responseJson.data.thread }
}

export {
    getAccessToken,
    putAccessToken,
    getUserLogged,
    getAllThreads,
    getThreadsById,
    fetchUserLogin,
    fetchUserRegistered,
    fetchAllUser,
    fetchCreateThread
}