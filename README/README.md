# Dokumentasi Pengujian Otomatis Kanggo Website

## Deskripsi

Proyek ini bertujuan untuk melakukan pengujian otomatis pada website Kanggo menggunakan WebdriverIO. Pengujian ini mencakup validasi judul halaman dan elemen tertentu di homepage.

## Prerequisites

Sebelum memulai, pastikan kamu telah memenuhi syarat berikut:

- Node.js (versi terbaru)
- npm (versi terbaru)

## Instalasi

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/jejefjefri/kanggo-qa-test.git
   cd kanggo-qa-test
   ```

2. **Instalasi dependensi:**
   ```bash
   npm install
   ```

3. **Instalasi WebdriverIO:**
   Jika belum menginstal WebdriverIO, kamu dapat melakukannya dengan perintah berikut:
   ```bash
   npm init wdio .
   ```

## Menjalankan Pengujian

1. **Menjalankan pengujian:**
   Untuk menjalankan pengujian, gunakan perintah berikut:
   ```bash
   npx wdio run wdio.conf.js
   ```

2. **Melihat laporan:**
   Setelah pengujian selesai, laporan akan disimpan dalam format teks di folder `reports` dengan nama `test_report.txt`. Kamu dapat membuka file ini untuk melihat hasil pengujian.

## Struktur Proyek

```
/NAMA_FOLDER
│
├── /reports               # Folder untuk menyimpan laporan pengujian
│   └── test_report.txt    # Laporan hasil pengujian
│
├── /test                  # Folder untuk menyimpan spesifikasi pengujian
│   └── /specs
│       └── homepage.js    # File spesifikasi pengujian
│
├── wdio.conf.js           # Konfigurasi WebdriverIO
└── package.json           # Dependensi dan skrip proyek
```

## Catatan

- Pastikan untuk mengatur konfigurasi WebdriverIO di `wdio.conf.js` sesuai kebutuhan, termasuk browser yang ingin digunakan dan pengaturan lainnya.
- Untuk mengubah pengujian atau menambahkannya, kamu bisa mengedit file `homepage.js` di dalam folder `specs`.

## Kontribusi

Jika kamu ingin berkontribusi pada proyek ini, silakan buka issue atau kirim pull request.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
