/**
 * @fileoverview Definisi endpoint API untuk news
 * @description Mendefinisikan route HTTP dan menghubungkannya ke controller.
 *
 * Endpoints:
 * - GET    /api/news            → Daftar semua berita (published)
 * - GET    /api/news/search     → Cari berita berdasarkan title
 * - GET    /api/news/:id        → Detail satu berita
 * - POST   /api/news            → Tambah berita baru (admin)
 * - PUT    /api/news/:id        → Update berita (admin)
 * - DELETE /api/news/:id        → Hapus berita (admin)
 */

const express = require("express");
const router = express.Router();

const {
  getNewsList,
  getNewsDetail,
  searchNewsByTitle,
  addNews,
  editNews,
  removeNews,
} = require("../controllers/newsController");

// --- Public Routes ---
router.get("/", getNewsList);
router.get("/search", searchNewsByTitle);
router.get("/:id", getNewsDetail);

// --- Admin Routes ---
router.post("/", addNews);
router.put("/:id", editNews);
router.delete("/:id", removeNews);

module.exports = router;
