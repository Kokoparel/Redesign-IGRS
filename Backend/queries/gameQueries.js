/**
 * @fileoverview Fungsi-fungsi query ke tabel games di Supabase
 * @description Menyediakan fungsi CRUD dan search untuk data games.
 *              Digunakan oleh gameController untuk mengakses database.
 */

const supabase = require("../database/supabase");

/**
 * Mengambil semua games yang published dengan pagination dan filter
 * @param {Object} options - Opsi query
 * @param {number} [options.page=1] - Nomor halaman
 * @param {number} [options.limit=10] - Jumlah item per halaman
 * @param {string} [options.rating] - Filter berdasarkan rating (7+, 13+, 15+, 18+, RC)
 * @param {string} [options.classification] - Filter berdasarkan classification
 * @returns {Promise<{data: Array, count: number, error: Object}>}
 */
const getAllGames = async ({ page = 1, limit = 10, rating, classification } = {}) => {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from("games")
    .select("*", { count: "exact" })
    .eq("is_published", true)
    .order("created_at", { ascending: false })
    .range(from, to);

  // Filter berdasarkan rating jika ada
  if (rating) {
    query = query.eq("rating", rating);
  }

  // Filter berdasarkan classification jika ada
  if (classification) {
    query = query.contains("classifications", [classification]);
  }

  const { data, count, error } = await query;
  return { data, count, error };
};

/**
 * Mengambil satu game berdasarkan ID
 * @param {string} id - UUID game
 * @returns {Promise<{data: Object, error: Object}>}
 */
const getGameById = async (id) => {
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .eq("id", id)
    .single();

  return { data, error };
};

/**
 * Mencari game berdasarkan keyword pada title
 * @param {string} keyword - Kata kunci pencarian
 * @param {Object} options - Opsi query
 * @param {number} [options.page=1] - Nomor halaman
 * @param {number} [options.limit=10] - Jumlah item per halaman
 * @returns {Promise<{data: Array, count: number, error: Object}>}
 */
const searchGames = async (keyword, { page = 1, limit = 10 } = {}) => {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, count, error } = await supabase
    .from("games")
    .select("*", { count: "exact" })
    .eq("is_published", true)
    .ilike("title", `%${keyword}%`)
    .order("created_at", { ascending: false })
    .range(from, to);

  return { data, count, error };
};

/**
 * Menambahkan game baru
 * @param {Object} gameData - Data game yang akan ditambahkan
 * @param {string} gameData.title - Judul game (required)
 * @param {string} [gameData.description] - Deskripsi game
 * @param {string} [gameData.image_url] - URL gambar
 * @param {string} [gameData.genre] - Genre game
 * @param {string} [gameData.platform] - Platform
 * @param {string} [gameData.developer] - Developer
 * @param {string} [gameData.rating] - Rating IGRS (7+, 13+, 15+, 18+, RC)
 * @param {string[]} [gameData.classifications] - Array content classification
 * @param {string} [gameData.release_date] - Tanggal rilis
 * @returns {Promise<{data: Object, error: Object}>}
 */
const createGame = async (gameData) => {
  const { data, error } = await supabase
    .from("games")
    .insert(gameData)
    .select()
    .single();

  return { data, error };
};

/**
 * Mengupdate game berdasarkan ID
 * @param {string} id - UUID game
 * @param {Object} gameData - Data yang akan diupdate
 * @returns {Promise<{data: Object, error: Object}>}
 */
const updateGame = async (id, gameData) => {
  const { data, error } = await supabase
    .from("games")
    .update(gameData)
    .eq("id", id)
    .select()
    .single();

  return { data, error };
};

/**
 * Menghapus game berdasarkan ID
 * @param {string} id - UUID game
 * @returns {Promise<{data: Object, error: Object}>}
 */
const deleteGame = async (id) => {
  const { data, error } = await supabase
    .from("games")
    .delete()
    .eq("id", id)
    .select()
    .single();

  return { data, error };
};

module.exports = {
  getAllGames,
  getGameById,
  searchGames,
  createGame,
  updateGame,
  deleteGame,
};
