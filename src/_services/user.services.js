export const userServices = {
    login,
    logout,
    register
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/ld+json',
            'Accept': 'application/ld+json'
        },
        body: JSON.stringify({ username, password })
    };

    return fetch('http://react.docker:8081/api/user/login', requestOptions)
    .then(response => {
        if (!response.ok) {
            return Promise.reject(response.statusText);
        }

        return response.json();
    })
    .then(user => {
        localStorage.setItem('user', JSON.stringify(user));

        return user;
    });
}

function logout() {
    localStorage.removeItem('user');
}

function register(user) {
    const { username, password } = user;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/ld+json',
            'Accept': 'application/ld+json'
        },
        body: JSON.stringify({ username, password })
    };

    return fetch('http://react.docker:8081/api/users', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}
