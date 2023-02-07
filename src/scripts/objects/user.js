const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    watchers: '',
    language: '',
    stargazers_count: '',
    forks_count: '',
    events: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url,
        this.name = gitHubUser.name,
        this.bio = gitHubUser.bio,
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.events = gitHubUser.events;
    },
    setRepositories(repositories) {
        this.repositories = repositories;
        this.language = repositories;
        this.watchers = repositories;
        this.forks_count = repositories;
        this.stargazers_count = repositories;
    },
    setEvents(events) {
        this.events = events;
        this.repo = events;
        this.payload = events;
    }
}

export { user }

/* console.log(eventResponse[0].repo.name);
console.log(eventResponse[0].payload.commits[0].message) */

/* user.events[z]?.payload?.commits?.[0]?.message; */