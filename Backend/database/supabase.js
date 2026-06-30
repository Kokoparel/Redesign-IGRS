/**
 * @fileoverview Konfigurasi koneksi ke Supabase
 * @description Menginisialisasi Supabase client menggunakan environment variables.
 *              File ini digunakan oleh semua queries untuk berkomunikasi dengan database.
 */

const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Validasi environment variables
if (!supabaseUrl || !supabaseKey) {
  console.error("SUPABASE_URL dan SUPABASE_KEY harus diisi di file .env!");
  process.exit(1);
}

/**
 * Instance Supabase client
 * @type {import('@supabase/supabase-js').SupabaseClient}
 */
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
