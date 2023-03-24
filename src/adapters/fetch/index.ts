export const getPokemon = async (endpoint: string, method = 'GET', data = {}) => {
    const response = await fetch(endpoint, {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: method != 'GET' ? JSON.stringify(data) : null,
    });

    if (response.ok) {
        return response.json();
    }

    return response;
};
