import { baseUrl, repositoriesQuantity } from "../variables.js";

async function fetchRepos(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json();
}

export { fetchRepos }