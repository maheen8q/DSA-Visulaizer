import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExplorerPage from "./pages/ExplorerPage";
import VisualizerPage from "./pages/VisualizerPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorerPage />} />
        <Route path="/visualizer/:algorithmId" element={<VisualizerPage />} />
      </Routes>
    </BrowserRouter>
  );
}
