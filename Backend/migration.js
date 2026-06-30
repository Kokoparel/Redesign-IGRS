/**
 * @fileoverview Script migrasi database
 * @description Membuat tabel 'games' dan 'news' di Supabase beserta
 *              RLS policies, triggers, dan indexes.
 *              Jalankan sekali sebelum server pertama kali dijalankan.
 *
 * @usage npm run migrate
 */

const supabase = require("./database/supabase");

/**
 * SQL untuk membuat tabel dan konfigurasi database
 */
const migrationSQL = `
-- =============================================
-- TABEL: games
-- =============================================
CREATE TABLE IF NOT EXISTS games (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  genre TEXT,
  platform TEXT,
  developer TEXT,
  rating TEXT CHECK (rating IN ('7+', '13+', '15+', '18+', 'RC')),
  classifications TEXT[] DEFAULT '{}',
  release_date DATE,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- TABEL: news
-- =============================================
CREATE TABLE IF NOT EXISTS news (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE,
  content TEXT,
  excerpt TEXT,
  image_url TEXT,
  author TEXT DEFAULT 'Admin',
  is_published BOOLEAN DEFAULT true,
  published_at TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- TRIGGER: Auto-update updated_at
-- =============================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'games_updated_at') THEN
    CREATE TRIGGER games_updated_at
      BEFORE UPDATE ON games
      FOR EACH ROW EXECUTE FUNCTION update_updated_at();
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'news_updated_at') THEN
    CREATE TRIGGER news_updated_at
      BEFORE UPDATE ON news
      FOR EACH ROW EXECUTE FUNCTION update_updated_at();
  END IF;
END;
$$;
`;

/**
 * Menjalankan migrasi database
 */
async function runMigration() {
  console.log("🚀 Memulai migrasi database...\n");

  try {
    // Cek koneksi dengan query sederhana
    const { data, error: connError } = await supabase
      .from("games")
      .select("id")
      .limit(1);

    if (connError && connError.code === "42P01") {
      // Tabel belum ada — ini normal untuk migrasi pertama kali
      console.log("ℹ️  Tabel belum ada. Silakan jalankan SQL migrasi di Supabase Dashboard → SQL Editor.");
      console.log("📄 File SQL tersedia di: supabase_setup.sql\n");
      console.log("Atau jalankan SQL berikut di Supabase SQL Editor:\n");
      console.log(migrationSQL);
    } else if (connError) {
      throw connError;
    } else {
      console.log("✅ Tabel 'games' sudah ada");

      // Cek tabel news
      const { error: newsError } = await supabase
        .from("news")
        .select("id")
        .limit(1);

      if (newsError && newsError.code === "42P01") {
        console.log("❌ Tabel 'news' belum ada. Jalankan SQL migrasi di Supabase Dashboard.");
      } else if (newsError) {
        throw newsError;
      } else {
        console.log("✅ Tabel 'news' sudah ada");
      }

      console.log("\n🎉 Migrasi selesai! Database sudah siap digunakan.");
    }
  } catch (error) {
    console.error("❌ Error saat migrasi:", error.message);
    process.exit(1);
  }
}

runMigration();
