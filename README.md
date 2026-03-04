# React Quiz App

A clean, interactive React quiz application that tests React fundamentals through multiple-choice questions, live scoring, and a countdown timer.

## Live Demo

- GitHub Pages: https://ahmed-adel-morsi.github.io/React-Quiz

## Features

- Works in two modes: local API (`json-server`) or static hosted data
- Multi-state quiz flow: loading → ready → active → finished
- Per-question scoring with total/max points tracking
- Countdown timer (`30s` per question)
- Instant answer feedback (correct/wrong highlighting)
- High score persistence during the active app session
- Restart flow without refetching question data

## Tech Stack

- React 19
- Context API + `useReducer` for global state management
- Create React App (`react-scripts`)
- `json-server` as a lightweight mock backend
- Environment-based API configuration (`REACT_APP_API_URL`)
- GitHub Pages (`gh-pages`) for deployment

## Project Structure

```text
src/
	components/
		App.js
		Header.js
		Main.js
		StartScreen.js
		Question.js
		Options.js
		Progress.js
		NextButton.js
		Timer.js
		Footer.js
		FinishScreen.js
		Loader.js
		Error.js
		DateCounter.js
	context/
		QuizContext.jsx
	index.js
	index.css

data/
	questions.json
```

## State Model

The global quiz state is managed in `QuizContext` using `useReducer`:

- `loading`: waiting for questions API
- `ready`: questions loaded, waiting to start
- `active`: quiz in progress
- `finished`: completed or timed out

Core reducer actions include:

- `dataReceived`, `dataFailed`
- `start`, `newAnswer`, `nextQuestion`
- `finish`, `restart`, `tick`

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Choose your run mode

#### Option A (recommended for fastest start): Use built-in static data

- Just run the app:

```bash
npm start
```

The app loads quiz data from `public/questions.json`.

#### Option B: Use `json-server` with `.env`

1. Create `.env.local` in the project root:

```bash
REACT_APP_API_URL=http://localhost:8000
```

2. Start the API server:

```bash
npm run server
```

3. Start the app:

```bash
npm start
```

The app will now fetch from `http://localhost:8000/questions`.

### 3) Live demo (no setup)

- Open: https://ahmed-adel-morsi.github.io/React-Quiz

Use this if you just want to try the app immediately.

## Available Scripts

- `npm start` — runs the app in development mode
- `npm run server` — starts `json-server` on port `8000`
- `npm test` — runs tests in watch mode
- `npm run build` — creates production build
- `npm run deploy` — deploys `build/` to GitHub Pages

## Deployment

This project is configured for GitHub Pages:

- `homepage` is set in `package.json`
- `predeploy` runs the production build
- `deploy` publishes the `build` directory using `gh-pages`

## Notes

- `build/` contains generated production assets and should not be edited manually.
- Data source fallback for hosted builds is `public/questions.json`.
- For local API mode, data is served from `data/questions.json` via `json-server`.

## Credits

- Built as part of **Jonas Schmedtmann’s React course** learning path.
- UI loader animation credit is retained in code comments (`src/index.css`).
