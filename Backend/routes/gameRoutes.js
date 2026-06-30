/**
 * @fileoverview Definisi endpoint API untuk games
 * @description Mendefinisikan route HTTP dan menghubungkannya ke controller.
 *
 * Endpoints:
 * - GET    /api/games            → Daftar semua games (published)
 * - GET    /api/games/search     → Cari game berdasarkan title
 * - GET    /api/games/:id        → Detail satu game
 * - POST   /api/games            → Tambah game baru (admin)
 * - PUT    /api/games/:id        → Update game (admin)
 * - DELETE /api/games/:id        → Hapus game (admin)
 */

const express = require("express");
const router = express.Router();

const {
  getGames,
  getGameDetail,
  searchGamesByTitle,
  addGame,
  editGame,
  removeGame,
} = require("../controllers/gameController");

// --- Public Routes ---
router.get("/", getGames);
router.get("/search", searchGamesByTitle);
router.get("/:id", getGameDetail);

// --- Admin Routes ---
router.post("/", addGame);
router.put("/:id", editGame);
router.delete("/:id", removeGame);

module.exports = router;
