## Objective

Create a simple Reddit client that shows the top 50 entries from Reddit - www.reddit.com/top

DEMO: https://reddit-client-ce036.web.app/

## Features

- Pagination support
- Saving pictures in the picture gallery
- App state-preservation/restoration
- Indicator of unread/read post (updated status, after post it’s selected)
- Dismiss Post Button (remove the cell from list. Animations required)
- Dismiss All Button (remove all posts. Animations required)
- Support split layout (left side: all posts / right side: detail post)
- Responsive design

## Decisions taken and important notes

- Used Create React App
- Used Redux as State Managment to have a global state.
- Used Mobile First Design.
- Used React Transition Group for animations.

## Installation

1. Clone the repository in your local environment.
2. Install packages through yarn or npm:

```
npm install
```

```
yarn install
```

3. Create a file in the root directory with the name .env.local and the following code:

```
REACT_APP_REDDIT_API=https://api.reddit.com/?limit=50
```

4. Run the application with yarn or npm:

```
npm start
```

```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# Authors

[Manuel Bogino](https://github.com/manuelbogino95)
