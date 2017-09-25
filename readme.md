## For clean local storage go to path: /clear_local_storage

##running on GitHub
https://romanenko-andrey.github.io/my-angular1.5-express-albom/app


Requirements:
- Angular 1.5.*
- Webpack
- ES6 + babel
- Angular UI router
- SASS
- No jQuery
- Page must be responsive
- Your code must be pushed to a repository in your Github account and the url must be provided to us so we can clone and test your project

Task:
Your task is to create a simple albums library for movies (from YouTube).
There are a few entities in this application: album and song/movie item that belongs to some album.

Main screen is management portal for users. Some predefined data for albums and video/song items should come from local .json file ($http.get('local.json'))

User is presented with list of albums on main screen.

User can select 'current album' to see it's details (title, description). And user also should be able to see all movies added to the album and play videos (YouTube integration here).

User can add movie to album (title, description, link from youtube) - popup here. No integration with API here for saving, just in memory on front end. When movie is added, it should appear on albums's details page.


