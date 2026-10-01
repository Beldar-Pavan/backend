require('dotenv').config()

const express = require('express');
const app = express();
const port = 3000;

const githubData = {
    "login": "beldarpavan78220-bit",
    "id": 296086647,
    "node_id": "U_kgDOEaXsdw",
    "avatar_url": "https://avatars.githubusercontent.com/u/296086647?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/beldarpavan78220-bit",
    "html_url": "https://github.com/beldarpavan78220-bit",
    "followers_url": "https://api.github.com/users/beldarpavan78220-bit/followers",
    "following_url": "https://api.github.com/users/beldarpavan78220-bit/following{/other_user}",
    "gists_url": "https://api.github.com/users/beldarpavan78220-bit/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/beldarpavan78220-bit/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/beldarpavan78220-bit/subscriptions",
    "organizations_url": "https://api.github.com/users/beldarpavan78220-bit/orgs",
    "repos_url": "https://api.github.com/users/beldarpavan78220-bit/repos",
    "events_url": "https://api.github.com/users/beldarpavan78220-bit/events{/privacy}",
    "received_events_url": "https://api.github.com/users/beldarpavan78220-bit/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Pavan Beldar",
    "company": "Weingenious Technocrafts",
    "blog": "",
    "location": "Pahur, jamner, maharashtra",
    "email": null,
    "hireable": null,
    "bio": "I am a student.",
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2026-06-23T07:30:17Z",
    "updated_at": "2026-10-01T12:44:13Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/githubdata', (req, res) => {
    res.send(githubData);
});

app.get('/email', (req, res) => {
    res.send('admin@gmail.com')
});

app.get('/login', (req, res) => {
    res.send('<h1>login your account</h1>')
});

app.get('/youtube', (req, res) => {
    res.send('<h2>watch the youtube</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});