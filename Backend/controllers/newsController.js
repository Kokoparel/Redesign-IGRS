/**
 * @fileoverview Controller untuk endpoint news
 * @description Menangani logika bisnis untuk setiap endpoint berita.
 *              Memproses request dari client, memanggil query yang sesuai,
 *              dan mengirimkan response dalam format standar.
 */

const {
  getAllNews,
  getNewsById,
  searchNews,
  createNews,
  updateNews,
  deleteNews,
} = require("../queries/newsQueries");
const { successResponse, errorResponse } = require("../response");

/**
 * Membuat slug dari title
 * Contoh: "IGRS Rilis Rating Baru" → "igrs-rilis-rating-baru"
 * @param {string} title - Judul berita
 * @returns {string} URL-friendly slug
 */
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")    // Hapus karakter spesial
    .replace(/\s+/g, "-")         // Spasi → dash
    .replace(/-+/g, "-")          // Multiple dash → single dash
    .replace(/^-+|-+$/g, "");     // Hapus dash di awal/akhir
};

/**
 * GET /api/news
 * Mengambil daftar semua news yang published
 * Query params: page, limit
 */
const getNewsList = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const { data, count, error } = await getAllNews({ page, limit });

    if (error) {
      return errorResponse(res, "Gagal mengambil data berita", 500);
    }

    const totalPages = Math.ceil(count / limit);

    return successResponse(res, "Berita berhasil diambil", data, 200, {
      page,
      limit,
      total: count,
      totalPages,
    });
  } catch (error) {
    console.error("Error getNewsList:", error);
    return errorResponse(res, "Internal server error", 500);
  }
};

/**
 * GET /api/news/search?q=keyword
 * Mencari news berdasarkan title
 */
const searchNewsByTitle = async (req, res) => {
  try {
    const { q } = req.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    if (!q || q.trim() === "") {
      return errorResponse(res, "Query parameter 'q' diperlukan", 400);
    }

    const { data, count, error } = await searchNews(q.trim(), { page, limit });

    if (error) {
      return errorResponse(res, "Gagal mencari berita", 500);
    }

    const totalPages = Math.ceil(count / limit);

    return successResponse(res, `Hasil pencarian untuk "${q}"`, data, 200, {
      page,
      limit,
      total: count,
      totalPages,
    });
  } catch (error) {
    console.error("Error searchNews:", error);
    return errorResponse(res, "Internal server error", 500);
  }
};

/**
 * GET /api/news/:id
 * Mengambil detail satu news berdasarkan ID
 */
const getNewsDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await getNewsById(id);

    if (error) {
      return errorResponse(res, "Berita tidak ditemukan", 404);
    }

    return successResponse(res, "Berita berhasil diambil", data);
  } catch (error) {
    console.error("Error getNewsDetail:", error);
    return errorResponse(res, "Internal server error", 500);
  }
};

/**
 * POST /api/news
 * Menambahkan berita baru (admin)
 */
const addNews = async (req, res) => {
  try {
    const { title, slug, content, excerpt, image_url, author } = req.body;

    // Validasi: title wajib diisi
    if (!title || title.trim() === "") {
      return errorResponse(res, "Title berita wajib diisi", 400);
    }

    const newsData = {
      title: title.trim(),
      slug: slug || generateSlug(title),
      content,
      excerpt,
      image_url,
      author: author || "Admin",
    };

    const { data, error } = await createNews(newsData);

    if (error) {
      // Cek jika slug sudah ada (unique constraint)
      if (error.code === "23505") {
        return errorResponse(res, "Slug sudah digunakan, gunakan slug yang berbeda", 409);
      }
      return errorResponse(res, `Gagal menambahkan berita: ${error.message}`, 400);
    }

    return successResponse(res, "Berita berhasil ditambahkan", data, 201);
  } catch (error) {
    console.error("Error addNews:", error);
    return errorResponse(res, "Internal server error", 500);
  }
};

/**
 * PUT /api/news/:id
 * Mengupdate berita berdasarkan ID (admin)
 */
const editNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, content, excerpt, image_url, author, is_published } = req.body;

    // Validasi: minimal satu field harus diisi
    if (Object.keys(req.body).length === 0) {
      return errorResponse(res, "Minimal satu field harus diisi untuk update", 400);
    }

    // Bangun object hanya dengan field yang dikirim
    const updateData = {};
    if (title !== undefined) updateData.title = title.trim();
    if (slug !== undefined) updateData.slug = slug;
    if (content !== undefined) updateData.content = content;
    if (excerpt !== undefined) updateData.excerpt = excerpt;
    if (image_url !== undefined) updateData.image_url = image_url;
    if (author !== undefined) updateData.author = author;
    if (is_published !== undefined) updateData.is_published = is_published;

    // Auto-generate slug jika title berubah dan slug tidak diberikan
    if (title && !slug) {
      updateData.slug = generateSlug(title);
    }

    const { data, error } = await updateNews(id, updateData);

    if (error) {
      if (error.code === "23505") {
        return errorResponse(res, "Slug sudah digunakan, gunakan slug yang berbeda", 409);
      }
      return errorResponse(res, "Berita tidak ditemukan atau gagal diupdate", 404);
    }

    return successResponse(res, "Berita berhasil diupdate", data);
  } catch (error) {
    console.error("Error editNews:", error);
    return errorResponse(res, "Internal server error", 500);
  }
};

/**
 * DELETE /api/news/:id
 * Menghapus berita berdasarkan ID (admin)
 */
const removeNews = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await deleteNews(id);

    if (error) {
      return errorResponse(res, "Berita tidak ditemukan atau gagal dihapus", 404);
    }

    return successResponse(res, "Berita berhasil dihapus", data);
  } catch (error) {
    console.error("Error removeNews:", error);
    return errorResponse(res, "Internal server error", 500);
  }
};

module.exports = {
  getNewsList,
  getNewsDetail,
  searchNewsByTitle,
  addNews,
  editNews,
  removeNews,
};
