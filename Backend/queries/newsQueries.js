/**
 * @fileoverview Fungsi-fungsi query ke tabel news di Supabase
 * @description Menyediakan fungsi CRUD dan search untuk data berita/news.
 *              Digunakan oleh newsController untuk mengakses database.
 */

const supabase = require("../database/supabase");

/**
 * Mengambil semua news yang published dengan pagination
 * @param {Object} options - Opsi query
 * @param {number} [options.page=1] - Nomor halaman
 * @param {number} [options.limit=10] - Jumlah item per halaman
 * @returns {Promise<{data: Array, count: number, error: Object}>}
 */
const getAllNews = async ({ page = 1, limit = 10 } = {}) => {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, count, error } = await supabase
    .from("news")
    .select("*", { count: "exact" })
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .range(from, to);

  return { data, count, error };
};

/**
 * Mengambil satu news berdasarkan ID
 * @param {string} id - UUID news
 * @returns {Promise<{data: Object, error: Object}>}
 */
const getNewsById = async (id) => {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  return { data, error };
};

/**
 * Mencari news berdasarkan keyword pada title
 * @param {string} keyword - Kata kunci pencarian
 * @param {Object} options - Opsi query
 * @param {number} [options.page=1] - Nomor halaman
 * @param {number} [options.limit=10] - Jumlah item per halaman
 * @returns {Promise<{data: Array, count: number, error: Object}>}
 */
const searchNews = async (keyword, { page = 1, limit = 10 } = {}) => {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, count, error } = await supabase
    .from("news")
    .select("*", { count: "exact" })
    .eq("is_published", true)
    .ilike("title", `%${keyword}%`)
    .order("published_at", { ascending: false })
    .range(from, to);

  return { data, count, error };
};

/**
 * Menambahkan news baru
 * @param {Object} newsData - Data news yang akan ditambahkan
 * @param {string} newsData.title - Judul berita (required)
 * @param {string} [newsData.slug] - URL-friendly title
 * @param {string} [newsData.content] - Isi berita
 * @param {string} [newsData.excerpt] - Ringkasan singkat
 * @param {string} [newsData.image_url] - URL gambar
 * @param {string} [newsData.author] - Nama penulis
 * @returns {Promise<{data: Object, error: Object}>}
 */
const createNews = async (newsData) => {
  const { data, error } = await supabase
    .from("news")
    .insert(newsData)
    .select()
    .single();

  return { data, error };
};

/**
 * Mengupdate news berdasarkan ID
 * @param {string} id - UUID news
 * @param {Object} newsData - Data yang akan diupdate
 * @returns {Promise<{data: Object, error: Object}>}
 */
const updateNews = async (id, newsData) => {
  const { data, error } = await supabase
    .from("news")
    .update(newsData)
    .eq("id", id)
    .select()
    .single();

  return { data, error };
};

/**
 * Menghapus news berdasarkan ID
 * @param {string} id - UUID news
 * @returns {Promise<{data: Object, error: Object}>}
 */
const deleteNews = async (id) => {
  const { data, error } = await supabase
    .from("news")
    .delete()
    .eq("id", id)
    .select()
    .single();

  return { data, error };
};

module.exports = {
  getAllNews,
  getNewsById,
  searchNews,
  createNews,
  updateNews,
  deleteNews,
};
