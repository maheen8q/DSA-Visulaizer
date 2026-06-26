# DSA Visualizer

Interactive step-by-step visualizations for sorting, searching, data structures, and graph algorithms.

---

## Tech Stack

| Layer    | Tech                              |
|----------|-----------------------------------|
| Frontend | React 18, TypeScript, Tailwind, Vite, React Router |
| Backend  | FastAPI, Pydantic, Uvicorn        |

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/maheen8q/DSA-Visulaizer
cd dsa-visualizer
```

### 2. Frontend setup

```bash
cd frontend
npm install
npm run dev
```

Opens at `http://localhost:5173`

### 3. Backend setup

```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

API runs at `http://localhost:8000`  
Auto-docs at `http://localhost:8000/docs`

---

## Branch Rules

| Branch | Purpose |
|--------|---------|
| `main` | Always working. Merges only via PR. |
| `dev`  | Integration branch. Everyone merges here first. |
| `feat/sorting-*` | Person 2's branches |
| `feat/ds-*`      | Person 3's branches |
| `feat/graphs-*`  | Person 4's branches |
| `feat/lead-*`    | Person 1's branches |

**Never push directly to `main`.**

---

## What Each Person Owns

### Person 1 — Lead
- `src/types/` — shared contracts, ask before changing
- `src/hooks/usePlayback.ts` — shared engine, ask before changing
- `src/data/algorithms.ts` — fallback metadata
- `src/pages/` — page shells
- `backend/` — all backend code

### Person 2 — Sorting
- `src/components/sorting/`
- `src/algorithms/sorting/`
- `src/utils/arrayHelpers.ts`

### Person 3 — Searching + DS
- `src/components/searching/`
- `src/components/data-structures/`
- `src/algorithms/searching/`
- `src/algorithms/data-structures/`

### Person 4 — Graphs + UI/UX
- `src/components/graphs/`
- `src/algorithms/graphs/`
- `src/components/shared/ExplanationPanel.tsx`
- `src/components/shared/TheoryPanel.tsx`
- `src/components/layout/`
- `index.css`, `tailwind.config.ts`

---

## Key Contracts (read before writing any algorithm)

All step generators must return an array matching the types in `src/types/steps.ts`.

Every step object **must** include a `message: string` — this is what the ExplanationPanel renders.

The `usePlayback` hook takes `AnyStep[]` and handles all play/pause/speed logic. Just pass your steps in.

---

## API Endpoints

| Method | Route | Returns |
|--------|-------|---------|
| GET | `/health` | `{ status: "ok" }` |
| GET | `/categories` | list of categories |
| GET | `/algorithms` | all algorithm metadata |
| GET | `/algorithms/{id}` | single algorithm metadata |
| GET | `/samples/{id}` | sample inputs for algorithm |
