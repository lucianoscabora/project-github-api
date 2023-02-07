const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
            <img src="${user.avatarUrl}" alt ="user's profile picture" />
            <div class="data">
            <h1>${user.name ?? "Name not registered"}</h1>
            <p>${user.bio ?? "Bio not registered"}</p>
            <span>Followers: ${user.followers ?? "User has no followers"
            }</span>
            <span>Following: ${user.following ?? "Still not following"}</span>
            </div>
            </div>
            `;

    let repositoriesItems = "";
    user.repositories.forEach(
      (repo) =>
        (repositoriesItems += `
                <li> 
                    <a href="${repo.html_url}" target="_blank">
                    <span>${repo.name}</span>
                    <div class="stats-pos">
                    <span><i class="fa-solid fa-laptop-code"></i>${repo.language ?? "N/A"}</span>
                    <span><i class="fa-regular fa-star"></i>${repo.stargazers_count}</span>
                    <span><i class="fa-sharp fa-solid fa-code-fork"></i>${repo.forks_count}</span>
                    <span><i class="fa-regular fa-eye"></i>${repo.watchers}</span>
                    </div>
                    </a>
                </li>
                `)
    );

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `
                    <div class="repositories section">
                        <h2>Repositories</h2>
                        <ul>${repositoriesItems}</ul>
                    </div>
                    `;
    }


    let arr = []
    for (let i = 0; i<user.events.length; i++) {
      if (user.events[i].type === "PushEvent") {
      arr.push(user.events[i].payload?.commits?.[0].message)
      }
    }

    let arr1 = []
    for (let i = 0; i<user.events.length; i++) {
      if (user.events[i].type === "PushEvent") {
      arr1.push(user.events?.[i].repo.name)
      }
    }

    let repoNames = "";
    arr.forEach(
      (repos) =>
        (repoNames += `
    <li>
    <span class="repo-names">
    ${repos}
    </span>
    </li>
    
      `)
    );

    let eventItems = "";
    arr1.forEach(
      (events) =>
        (eventItems += `
      <li>
      <span class="repo-names">
      ${events}
      </span>
      </li>
      
      `)
    );

    if (user.events.length > 0) {
      this.userProfile.innerHTML += `
      <h3 class="event-title">Push Events list</h3>
      <div class="data-event">
      <ul>
      <div class="list-ev">${eventItems}</div>
      </ul>
      <ul>
      <div class="list-rep">${repoNames}<div>
      </ul>
      </div>
      `;
    }
  },

  renderNotFound() {
    this.userProfile.innerHTML = "<h3> No user found... </h3>";
  },
};

export { screen };
