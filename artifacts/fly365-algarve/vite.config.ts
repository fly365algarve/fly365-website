import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { readdirSync } from "node:fs";
import weather from "../../netlify/functions/weather";

const rawPort = process.env.PORT ?? "5173";
const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,
  define: {
    __PUBLIC_IMAGE_PATHS__: JSON.stringify(readdirSync(path.resolve(import.meta.dirname, "public/images")).map((name) => `/images/${name}`)),
  },
  plugins: [
    {
      name: "fly365-weather-preview",
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          const pathname = req.url?.split("?")[0];
          const endpoint = `${basePath.replace(/\/$/, "")}/.netlify/functions/weather`;
          if (pathname !== endpoint && pathname !== "/.netlify/functions/weather") return next();
          try {
            const response = await weather(new Request("http://weather.internal/.netlify/functions/weather", { method: req.method ?? "GET" }));
            res.statusCode = response.status;
            response.headers.forEach((value, key) => res.setHeader(key, value));
            res.end(await response.text());
          } catch {
            res.statusCode = 503;
            res.setHeader("Cache-Control", "no-store");
            res.end();
          }
        });
      },
    },
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
