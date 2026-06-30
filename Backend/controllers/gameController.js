/**
 * @fileoverview Controller untuk endpoint games
 * @description Menangani logika bisnis untuk setiap endpoint game.
 *              Memproses request dari client, memanggil query yang sesuai,
 *              dan mengirimkan response dalam format standar.
 */

const {
  getAllGames,
  getGameById,
  searchGames,
  createGame,
  updateGame,
  deleteGame,
} = require("../queries/gameQueries");
const { successResponse, errorResponse } = require("../response");

/** Daftar rating IGRS yang valid */
const VALID_RATINGS = ["7+", "13+", "15+", "18+", "RC"];

/** Daftar content classification yang valid */
const VALID_CLASSIFICATIONS = [
  "Horror",
  "Online Interactions",
  "Character Appearance",
  "Violence",
  "Sexuality/Pornography",
  "Drugs",
  "Blood",
  "Language",
  "Gambling",
];

/**
 * GET /api/games
 * Mengambil daftar semua games yang published
 * Query params: page, limit, rating, classification
 */
const getGames = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { rating, classification } = req.query;

    // Validasi rating jika diberikan
    if (rating && !VALID_RATINGS.includes(rating)) {
      return errorResponse(
        res,
        `Rating tidak valid. Gunakan salah satu dari: ${VALID_RATINGS.join(", ")}`,
        400
      );
    }

    // Validasi classification jika diberikan
    if (classification && !VALID_CLASSIFICATIONS.includes(classification)) {
      return errorResponse(
        res,
        `Classification tidak valid. Gunakan salah satu dari: ${VALID_CLASSIFICATIONS.join(", ")}`,
        400
      );
    }

    const { data, count, error } = await getAllGames({
      page,
      limit,
      rating,
      classification,
    });

    if (error) {
      return errorResponse(res, "Gagal mengambil data games", 500);
    }

    const totalPages = Math.ceil(count / limit);

    return successResponse(res, "Games berhasil diambil", data, 200, {
      page,
      limit,
      total: count,
      totalPages,
    });
  } catch (error) {
    console.error("Error getGames:", error);
    return errorResponse(res, "Internal server error", 500);
  }
};

/**
 * GET /api/games/search?q=keyword
 * Mencari game berdasarkan title
 */
const searchGamesByTitle = async (req, res) => {
  try {
    const { q } = req.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    if (!q || q.trim() === "") {
      return errorResponse(res, "Query parameter 'q' diperlukan", 400);
    }

    const { data, count, error } = await searchGames(q.trim(), { page, limit });

    if (error) {
      return errorResponse(res, "Gagal mencari games", 500);
    }

    const totalPages = Math.ceil(count / limit);

    return successResponse(res, `Hasil pencarian untuk "${q}"`, data, 200, {
      page,
      limit,
      total: count,
      totalPages,
    });
  } catch (error) {
    console.error("Error searchGames:", error);
    return errorResponse(res, "Internal server error", 500);
  }
};

/**
 * GET /api/games/:id
 * Mengambil detail satu game berdasarkan ID
 */
const getGameDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await getGameById(id);

    if (error) {
      return errorResponse(res, "Game tidak ditemukan", 404);
    }

    return successResponse(res, "Game berhasil diambil", data);
  } catch (error) {
    console.error("Error getGameDetail:", error);
    return errorResponse(res, "Internal server error", 500);
  }
};

/**
 * POST /api/games
 * Menambahkan game baru (admin)
 */
const addGame = async (req, res) => {
  try {
    const { title, description, image_url, genre, platform, developer, rating, classifications, release_date } = req.body;

    // Validasi: title wajib diisi
    if (!title || title.trim() === "") {
      return errorResponse(res, "Title game wajib diisi", 400);
    }

    // Validasi rating jika diberikan
    if (rating && !VALID_RATINGS.includes(rating)) {
      return errorResponse(
        res,
        `Rating tidak valid. Gunakan salah satu dari: ${VALID_RATINGS.join(", ")}`,
        400
      );
    }

    // Validasi classifications jika diberikan
    if (classifications && Array.isArray(classifications)) {
      const invalidClassifications = classifications.filter(
        (c) => !VALID_CLASSIFICATIONS.includes(c)
      );
      if (invalidClassifications.length > 0) {
        return errorResponse(
          res,
          `Classification tidak valid: ${invalidClassifications.join(", ")}. Gunakan: ${VALID_CLASSIFICATIONS.join(", ")}`,
          400
        );
      }
    }

    const gameData = {
      title: title.trim(),
      description,
      image_url,
      genre,
      platform,
      developer,
      rating,
      classifications: classifications || [],
      release_date,
    };

    const { data, error } = await createGame(gameData);

    if (error) {
      return errorResponse(res, `Gagal menambahkan game: ${error.message}`, 400);
    }

    return successResponse(res, "Game berhasil ditambahkan", data, 201);
  } catch (error) {
    console.error("Error addGame:", error);
    return errorResponse(res, "Internal server error", 500);
  }
};

/**
 * PUT /api/games/:id
 * Mengupdate game berdasarkan ID (admin)
 */
const editGame = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image_url, genre, platform, developer, rating, classifications, release_date, is_published } = req.body;

    // Validasi: minimal satu field harus diisi
    if (Object.keys(req.body).length === 0) {
      return errorResponse(res, "Minimal satu field harus diisi untuk update", 400);
    }

    // Validasi rating jika diberikan
    if (rating && !VALID_RATINGS.includes(rating)) {
      return errorResponse(
        res,
        `Rating tidak valid. Gunakan salah satu dari: ${VALID_RATINGS.join(", ")}`,
        400
      );
    }

    // Validasi classifications jika diberikan
    if (classifications && Array.isArray(classifications)) {
      const invalidClassifications = classifications.filter(
        (c) => !VALID_CLASSIFICATIONS.includes(c)
      );
      if (invalidClassifications.length > 0) {
        return errorResponse(
          res,
          `Classification tidak valid: ${invalidClassifications.join(", ")}`,
          400
        );
      }
    }

    // Bangun object hanya dengan field yang dikirim
    const updateData = {};
    if (title !== undefined) updateData.title = title.trim();
    if (description !== undefined) updateData.description = description;
    if (image_url !== undefined) updateData.image_url = image_url;
    if (genre !== undefined) updateData.genre = genre;
    if (platform !== undefined) updateData.platform = platform;
    if (developer !== undefined) updateData.developer = developer;
    if (rating !== undefined) updateData.rating = rating;
    if (classifications !== undefined) updateData.classifications = classifications;
    if (release_date !== undefined) updateData.release_date = release_date;
    if (is_published !== undefined) updateData.is_published = is_published;

    const { data, error } = await updateGame(id, updateData);

    if (error) {
      return errorResponse(res, "Game tidak ditemukan atau gagal diupdate", 404);
    }

    return successResponse(res, "Game berhasil diupdate", data);
  } catch (error) {
    console.error("Error editGame:", error);
    return errorResponse(res, "Internal server error", 500);
  }
};

/**
 * DELETE /api/games/:id
 * Menghapus game berdasarkan ID (admin)
 */
const removeGame = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await deleteGame(id);

    if (error) {
      return errorResponse(res, "Game tidak ditemukan atau gagal dihapus", 404);
    }

    return successResponse(res, "Game berhasil dihapus", data);
  } catch (error) {
    console.error("Error removeGame:", error);
    return errorResponse(res, "Internal server error", 500);
  }
};

module.exports = {
  getGames,
  getGameDetail,
  searchGamesByTitle,
  addGame,
  editGame,
  removeGame,
};
