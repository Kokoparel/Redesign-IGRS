# Frontend : Redesign Challenge

Selamat datang di modul frontend! Repositori ini berisi dua pilihan frontend yang bisa kamu gunakan sebagai referensi, yaitu **React (Vite + TailwindCSS v4)** dan **Native (Vanilla HTML + Tailwind CDN)**. Kamu bebas memilih salah satu atau menggunakan teknologi lain sesuai kebutuhan timmu.

---

## Prasyarat

Pastikan kamu sudah menginstall:

- [Node.js](https://nodejs.org/id)
- [VS Code](https://code.visualstudio.com/) (rekomendasi)

---

## React (Vite + TailwindCSS v4)

### 1. Masuk ke Folder React

```bash
cd Frontend/react
```

### 2. Instalasi Dependencies

```bash
npm install
```

Perintah ini akan otomatis menginstall semua dependencies berdasarkan `package.json`, termasuk `react`, `vite`, dan `tailwindcss`.

> Setelah selesai, akan muncul folder `node_modules` di project kamu. Folder ini tidak perlu disentuh.

### 3. Setup Environment

```bash
cp .env.example .env
```

Buka file `.env` dan sesuaikan `VITE_API_BASE_URL` jika diperlukan:

```
VITE_API_BASE_URL=http://localhost:3000
```

### 4. Jalankan Dev Server

```bash
npm run dev
```

Jika berhasil, kamu akan melihat output seperti ini:

```
VITE v8.0.16  ready in 502 ms

  ➜  Local:   http://localhost:5173/
```

### Perintah Lainnya

| Perintah          | Fungsi                                   |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Menjalankan dev server dengan hot reload |
| `npm run build`   | Build produksi ke folder `dist/`         |
| `npm run preview` | Preview hasil build secara lokal         |
| `npm run lint`    | Mengecek kode dengan ESLint              |

### Proxy API

> Secara default, Vite sudah dikonfigurasi untuk proxy `/game` ke `http://localhost:3000`. Jadi saat kamu fetch `/game` dari kode React, request akan otomatis diteruskan ke backend tanpa perlu CORS.

### Environment Variable

Kode React membaca `VITE_API_BASE_URL` dari file `.env`. Cara penggunaannya:

```js
const base = import.meta.env.VITE_API_BASE_URL || "";
fetch(`${base}/game`);
```

- Jika `VITE_API_BASE_URL` diisi (contoh: `http://localhost:3000`), fetch akan langsung ke URL tersebut.
- Jika dibiarkan kosong, fetch akan memakai proxy bawaan Vite (`/game`).

### Dummy Data

Jika backend tidak menyala, halaman akan otomatis menampilkan data dari `public/dummy.json`. Data ini berisi 10 game contoh dan tetap bisa dicari, difilter, dan diurutkan. Kamu bisa mengganti isinya sesuai kebutuhan.

### Struktur Folder React

```
Frontend/react/
├── public/
│   ├── dummy.json       # Data contoh jika backend mati
│   └── favicon.svg
├── src/
│   ├── hooks/
│   │   └── useGames.js  # Custom hook untuk logic game
│   ├── App.jsx          # Komponen utama (tampilan)
│   ├── main.jsx         # Entry point React
│   └── index.css        # Import TailwindCSS
├── .env.example         # Contoh konfigurasi environment
├── vite.config.js       # Konfigurasi Vite + proxy
├── eslint.config.js
├── index.html
└── package.json
```

---

## Native (Vanilla HTML + Tailwind CDN)

### 1. Masuk ke Folder Native

```bash
cd Frontend/native
```

### 2. Setup Config

```bash
cp config.example.js config.js
```

Buka file `config.js` dan sesuaikan `API_BASE_URL` jika diperlukan:

```js
const CONFIG = {
  API_BASE_URL: "http://localhost:3000",
};
```

### 3. Buka di Browser

Cukup buka file `index.html` langsung di browser. Tidak perlu install apa-apa.

### Dummy Data

Sama seperti versi React, jika backend tidak menyala, halaman akan otomatis mengambil data dari `dummy.json`. Data ini sudah termasuk 10 game contoh.

> Native tidak menggunakan Vite, jadi pastikan backend benar-benar menyala jika ingin data real-time. Jika hanya ingin lihat tampilan, dummy data sudah cukup.

### Struktur Folder Native

```
Frontend/native/
├── index.html           # Halaman utama
├── script.js            # Logic fetching, filter, sort
├── dummy.json           # Data contoh jika backend mati
├── config.example.js    # Contoh konfigurasi API
└── config.js            # Konfigurasi API (buat sendiri)
```

---

## Penutup

Selamat! Kamu sudah berhasil memahami struktur frontend dari project ini. Apapun pilihan teknologimu, yang terpenting adalah bagaimana frontend dan backend bisa bekerja sama dengan baik.

Jangan ragu untuk bereksperimen, mengganti tema, atau bahkan mengganti stack frontend-mu sendiri. Justru tantangan desain ulang ini adalah tempat yang tepat untuk mencoba hal-hal baru.

**Tetap semangat, terus berkarya, dan jangan takut untuk mencoba!** 🚀
