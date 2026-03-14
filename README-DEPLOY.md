# Heartopia Guide 2026

Aplikasi database lengkap untuk game Heartopia dengan tampilan modern dan responsif.

## Fitur
- 📚 Database lengkap: Makanan, Bahan, Benih, Serangga, Burung, Ikan
- 🔍 Pencarian dan filter berdasarkan level
- 📱 Desain responsif untuk mobile dan desktop
- 🎨 Tampilan modern dengan gradien dan animasi smooth
- ⭐ Format harga bintang yang konsisten
- 🌤️ Informasi lengkap: lokasi, waktu, cuaca

## Cara Deploy ke Vercel

### Prasyarat
- Akun Vercel
- Vercel CLI terinstall

### Langkah-langkah

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login ke Vercel**
```bash
vercel login
```

3. **Deploy Project**
```bash
cd path/to/heartopiabooks-main
vercel --prod
```

4. **Konfigurasi**
- Pilih "Static" sebagai project type
- Set output directory ke `./`
- Konfigurasi domain jika diperlukan

### Struktur File
```
heartopiabooks-main/
├── index.html              # Halaman utama
├── heartopia-data-2026-03-13.json  # Data game
├── vercel.json            # Konfigurasi Vercel
├── package.json           # Dependencies
└── README.md             # Dokumentasi
```

## Environment Variables
Tidak diperlukan - aplikasi menggunakan static files.

## Preview URL
Setelah deploy, aplikasi akan tersedia di:
`https://your-project-name.vercel.app`

## Performance
- ⚡ Fast loading dengan static files
- 🗂️ Optimized images
- 📊 SEO friendly
- 🔒 HTTPS enabled

## Support
Jika ada masalah, cek:
1. Console browser untuk error
2. Network tab untuk failed requests
3. Vercel dashboard untuk deployment logs
