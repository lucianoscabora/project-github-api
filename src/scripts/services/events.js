import { baseUrl } from '../variables.js';

async function fetchUserEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events`)
    return await response.json();
}

export { fetchUserEvents }
