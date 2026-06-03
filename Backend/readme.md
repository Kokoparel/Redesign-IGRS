# Backend : Redesign Challenge


Selamat datang di modul backend! Repositori ini berisi baseline project Express.js + MySQL yang sudah disiapkan sebagai panduan untuk kamu mengikuti sesi backend.


---


## Prasyarat


Pastikan kamu sudah menginstall:
- [Node.js](https://nodejs.org/id)
- [Antigravity](https://antigravity.google/)
- [XAMPP](https://www.apachefriends.org/)
- [Postman](https://www.postman.com/)


---


## Cara Menjalankan Project


### 1. Clone Repo


```bash
git clone https://github.com/mauinGit/Redesign-Challenge.git
cd Redesign-Challenge
cd Backend
```


> **Catatan:** File `.env` tidak ikut ter-clone karena sengaja diabaikan demi keamanan. Kamu perlu membuatnya sendiri di langkah berikutnya.


---


### 2. Instalasi Dependencies


```bash
npm install
```


Perintah ini akan otomatis menginstall semua dependencies yang dibutuhkan berdasarkan `package.json`, termasuk `express`, `mysql2`, dan `dotenv`.


> Setelah selesai, akan muncul folder `node_modules` di project kamu. Folder ini tidak perlu disentuh.


---


### 3. Setup .env


Buat file `.env` di folder `Backend`. Kamu bisa melihat contoh isinya di file `.env.example` yang sudah tersedia di repo, lalu sesuaikan dengan konfigurasi MySQL kamu:


```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=redesign
PORT=3000
```


---


### 4. Migrasi Database


Jalankan perintah berikut untuk membuat database dan tabel secara otomatis:


```bash
npm run migrate
```


Jika berhasil, kamu akan melihat output seperti ini:


```
Koneksi berhasil!
Database berhasil dibuat!
Tabel game berhasil dibuat!
```


> Perintah ini hanya perlu dijalankan **sekali saja**. Jika dijalankan ulang tidak masalah karena menggunakan `IF NOT EXISTS`, sehingga database dan tabel yang sudah ada tidak akan tertimpa.
>
> Jika kamu ingin menambahkan tabel baru, tambahkan query `CREATE TABLE` di file `migration.js` lalu jalankan `npm run migrate` kembali.


---


### 5. Jalankan Server


```bash
npm run dev
```


Jika berhasil, kamu akan melihat output seperti ini:


```
Koneksi database berhasil!
Server berjalan di port 3000
```


Server kamu sekarang sudah berjalan di:


```
http://localhost:3000
```


> Perintah `npm run dev` menggunakan `nodemon` yang akan otomatis merestart server setiap kali kamu menyimpan perubahan file.


---


## Struktur Folder


```
Backend/
├── controllers/       # Logika setiap endpoint
├── database/          # Konfigurasi koneksi MySQL
├── queries/           # Fungsi-fungsi query ke database
├── routes/            # Definisi endpoint API
├── response.js        # Helper standarisasi format response
├── migration.js       # Script buat database & tabel
└── main.js            # Entry point server
```


- **`controllers/`** : Berisi logika dari setiap endpoint. Di sinilah kamu memproses request dari client dan mengirimkan response.
- **`database/`** : Berisi konfigurasi koneksi ke database MySQL. Digunakan oleh `queries/` untuk menjalankan query.
- **`queries/`** : Berisi fungsi-fungsi query ke database seperti `getAllGames`, `createGame`, dll.
- **`routes/`** : Berisi definisi endpoint API. Di sinilah kamu menentukan method HTTP dan menghubungkannya ke controller.
- **`response.js`** : Fungsi helper untuk menstandarisasi format response API.
- **`migration.js`** : Script untuk membuat database dan tabel. Dijalankan sekali sebelum server pertama kali dijalankan.
- **`main.js`** : Entry point server. Di sinilah Express diinisialisasi dan semua routes didaftarkan.


---


## Testing Endpoint


Setelah kamu selesai membuat endpoint, kamu bisa langsung mencoba menggunakan Postman.


Pastikan server sudah berjalan dengan `npm run dev`, lalu coba endpoint berikut:


### GET /game : Ambil Semua Data Game


```
GET http://localhost:3000/game
```


Jika berhasil, response akan seperti ini:


```json
{
    "payload": {
        "data": [],
        "message": "Data Semua Game"
    },
    "metadata": {
        "prev": "",
        "next": "",
        "current": ""
    }
}
```


> Data kosong `[]` adalah normal jika belum ada data yang dimasukkan.


Untuk endpoint lainnya seperti `POST`, `PUT`, dan `DELETE` bisa kamu eksplorasi sendiri mengikuti pola yang sama. Sesuaikan method, URL, dan isi body-nya sesuai kebutuhan.


Jika ada pertanyaan atau kendala, jangan ragu untuk menghubungi **curriculum backend** atau **core team backend**.


---


## Penutup


Selamat! Kamu sudah berhasil menjalankan project backend ini. 🎉


Membangun sebuah API dari nol memang tidak mudah, tapi kamu sudah membuktikan bahwa kamu bisa. Setiap baris kode yang kamu tulis hari ini adalah fondasi dari skill yang akan terus berkembang ke depannya.


Dunia backend masih sangat luas, masih ada autentikasi, middleware, relasi database, deployment, dan banyak lagi yang bisa kamu eksplorasi. Tapi perjalanan seribu mil selalu dimulai dari satu langkah, dan kamu sudah mengambil langkah itu hari ini.


**Tetap semangat, terus bereksperimen, dan jangan takut salah karena error adalah guru terbaik seorang developer.** 🚀