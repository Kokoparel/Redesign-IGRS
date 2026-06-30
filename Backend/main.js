/**
 * @fileoverview Entry point server IGRS Backend
 * @description Menginisialisasi Express server, mendaftarkan middleware,
 *              dan menghubungkan semua routes.
 *
 * @usage
 *   Development : npm run dev   (dengan nodemon, auto-reload)
 *   Production  : npm start
 *
 * @requires express - Web framework
 * @requires cors - Cross-Origin Resource Sharing middleware
 * @requires dotenv - Environment variables loader
 */

const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import routes
const gameRoutes = require("./routes/gameRoutes");
const newsRoutes = require("./routes/newsRoutes");

// Import response helper untuk error handling
const { errorResponse } = require("./response");

// Inisialisasi Express
const app = express();
const PORT = process.env.PORT || 3000;

// =============================================
// MIDDLEWARE
// =============================================

// CORS — mengizinkan request dari frontend
app.use(cors());

// Body parser — parsing JSON request body
app.use(express.json());

// Request logger — log setiap request yang masuk (development)
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// =============================================
// ROUTES
// =============================================

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "IGRS API is running",
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/api/games", gameRoutes);
app.use("/api/news", newsRoutes);

// =============================================
// ERROR HANDLING
// =============================================

// 404 — Route tidak ditemukan
app.use((req, res) => {
  return errorResponse(res, `Route ${req.method} ${req.url} tidak ditemukan`, 404);
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("❌ Unhandled Error:", err);
  return errorResponse(res, "Internal server error", 500);
});

// =============================================
// START SERVER
// =============================================

app.listen(PORT, () => {
  console.log(`\n🚀 IGRS API Server berjalan di http://localhost:${PORT}`);
  console.log(`📖 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🎮 Games API:    http://localhost:${PORT}/api/games`);
  console.log(`📰 News API:     http://localhost:${PORT}/api/news\n`);
});
