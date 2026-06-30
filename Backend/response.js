/**
 * @fileoverview Helper standarisasi format response API
 * @description Menyediakan fungsi untuk mengirim response dengan format konsisten
 *              di seluruh endpoint API.
 *
 * Format Response:
 * - Success: { success: true, message: "...", data: {...}, pagination?: {...} }
 * - Error:   { success: false, message: "..." }
 */

/**
 * Mengirim response sukses
 * @param {import('express').Response} res - Express response object
 * @param {string} message - Pesan sukses
 * @param {Object|Array} data - Data yang dikembalikan
 * @param {number} [statusCode=200] - HTTP status code
 * @param {Object} [pagination] - Informasi pagination (opsional)
 * @param {number} pagination.page - Halaman saat ini
 * @param {number} pagination.limit - Jumlah item per halaman
 * @param {number} pagination.total - Total seluruh item
 * @param {number} pagination.totalPages - Total halaman
 */
const successResponse = (res, message, data, statusCode = 200, pagination = null) => {
  const response = {
    success: true,
    message,
    data,
  };

  if (pagination) {
    response.pagination = pagination;
  }

  return res.status(statusCode).json(response);
};

/**
 * Mengirim response error
 * @param {import('express').Response} res - Express response object
 * @param {string} message - Pesan error
 * @param {number} [statusCode=500] - HTTP status code
 */
const errorResponse = (res, message, statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = { successResponse, errorResponse };
