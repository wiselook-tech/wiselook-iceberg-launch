import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// Self-hosted fonts (latin subset only) — weights actually used by the
// site: heading (Space Grotesk) 500/600/700, body (Inter) 400/500/600.
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/space-grotesk/latin-600.css";
import "@fontsource/space-grotesk/latin-700.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
