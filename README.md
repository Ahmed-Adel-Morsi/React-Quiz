# 🧠 The React Quiz

A polished React quiz application that tests React fundamentals through timed multiple-choice questions, live scoring, and instant feedback.  
Designed as a practical state-management project using Context API + `useReducer`.

## 🌐 Live Demo

- [Try it on GitHub Pages](https://ahmed-adel-morsi.github.io/React-Quiz)

## ✨ Features

- ⚡ Smooth multi-step quiz flow: `loading` → `ready` → `active` → `finished`
- 🧮 Dynamic score calculation with max-points tracking
- ⏱️ Built-in countdown timer (`30s` per question)
- ✅ Instant answer validation with correct/wrong highlighting
- 🏆 Session high-score tracking and quick restart
- 🔌 Flexible data source: local API (`json-server`) or static JSON fallback
- 💥 Friendly error state when data fetching fails

## 🛠️ Tech Stack

- **Frontend:** React 19, React DOM
- **State Management:** Context API + `useReducer`
- **Tooling:** Create React App (`react-scripts`)
- **Mock Backend:** `json-server`
- **Testing:** React Testing Library + Jest DOM
- **Deployment:** GitHub Pages (`gh-pages`)

## 🧩 Architecture Highlights

- Centralized quiz logic lives in `src/context/QuizContext.jsx`
- Global reducer handles all transitions (`start`, `newAnswer`, `nextQuestion`, `finish`, `restart`, `tick`)
- Components remain focused and reusable (`Progress`, `Question`, `Options`, `Timer`, `FinishScreen`, etc.)
- Data endpoint is environment-aware:
  - Uses `REACT_APP_API_URL/questions` when defined
  - Falls back to `public/questions.json` for hosted/static usage

## 📁 Project Structure

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

public/
  questions.json
```

## 🚀 Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run the app

#### Option A (quickest): Static data mode

```bash
npm start
```

The app will load questions from `public/questions.json`.

#### Option B: Local API mode with `json-server`

1. Create a `.env.local` file in the root:

```bash
REACT_APP_API_URL=http://localhost:8000
```

2. Start mock API:

```bash
npm run server
```

3. Start frontend:

```bash
npm start
```

Now the app fetches from `http://localhost:8000/questions`.

## 📜 Available Scripts

- `npm start` — run app in development mode
- `npm run server` — run `json-server` on port `8000`
- `npm test` — run test runner
- `npm run build` — create production build
- `npm run deploy` — deploy `build/` to GitHub Pages

## 🚢 Deployment

Deployment is preconfigured for GitHub Pages:

- `homepage` is set in `package.json`
- `predeploy` builds the app
- `deploy` publishes the `build/` folder via `gh-pages`

## 🧪 Quiz Dataset

The included dataset currently has **15 React-focused questions** with weighted scoring to better reflect question difficulty.

## 🙌 Credits

- Built as part of the React learning journey from **Jonas Schmedtmann’s course**
- Loader animation credit is retained in `src/index.css`
