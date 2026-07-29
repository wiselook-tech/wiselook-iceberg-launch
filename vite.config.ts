import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "node:fs";
import path from "path";
import { componentTagger } from "lovable-tagger";

// The dev server's SPA fallback swallows directory URLs like /privacy/ before
// static files are considered, so public/<dir>/index.html pages 404 in dev
// (production and `vite preview` resolve them fine).
const publicDirIndexes = (): Plugin => ({
  name: "public-dir-indexes",
  apply: "serve",
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const [pathname, query] = (req.url ?? "").split("?");
      if (pathname.endsWith("/") && pathname !== "/") {
        const file = path.join(server.config.publicDir, pathname, "index.html");
        if (fs.existsSync(file)) {
          req.url = path.posix.join(pathname, "index.html") + (query ? `?${query}` : "");
        }
      }
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), publicDirIndexes(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.JPG", "**/*.jpg", "**/*.jpeg", "**/*.JPEG", "**/*.PNG", "**/*.png"],
  build: {
    outDir: "docs",
  },
}));