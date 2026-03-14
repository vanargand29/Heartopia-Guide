# Heartopia Guide - Vercel + Supabase Integration

## 🚀 Setup Lengkap

### 📋 Prasyarat
- Akun Vercel (https://vercel.com)
- Akun Supabase (https://supabase.com)
- Node.js terinstall
- Vercel CLI terinstall

### 🗃️ Struktur Project
```
heartopiabooks-main/
├── index.html                    # Frontend static
├── api/
│   └── data.js                 # Vercel API functions
├── vercel.json                  # Konfigurasi Vercel
├── package.json                 # Dependencies
├── upload-to-supabase.js        # Upload data script
├── supabase-api.sql            # Database schema
└── README-DEPLOY.md             # Documentation
```

## 🎯 Langkah 1: Setup Supabase

### 1. Buat Project Baru
1. Login ke [Supabase Dashboard](https://supabase.com/dashboard)
2. Klik "New Project"
3. Beri nama: `heartopia-guide`
4. Pilih region terdekat
5. Tunggu proses setup

### 2. Setup Database
1. Buka menu "SQL Editor"
2. Copy-paste isi dari `supabase-api.sql`
3. Klik "Run" untuk membuat table
4. Verifikasi table `heartopia_items` terbuat

### 3. Get Credentials
1. Buka menu "Settings" → "API"
2. Copy **Project URL** dan **anon public key**
3. Simpan untuk environment variables

## 🎯 Langkah 2: Setup Vercel

### 1. Environment Variables
```bash
# Set di Vercel Dashboard → Project Settings → Environment Variables
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Deploy ke Vercel
```bash
# Install dependencies
npm install

# Deploy ke production
npm run deploy
```

## 🎯 Langkah 3: Upload Data

### 1. Upload Data ke Supabase
```bash
# Set environment variables dulu
export SUPABASE_URL=your_supabase_project_url
export SUPABASE_ANON_KEY=your_supabase_anon_key

# Jalankan upload script
node upload-to-supabase.js
```

### 2. Update Frontend (Opsional)
Jika ingin menggunakan API Supabase:
1. Update `index.html` untuk fetch dari API
2. Ganti `fetch('./heartopia-data-2026-03-13.json')` dengan API calls

## 🌐 API Endpoints

### Get All Data
```javascript
GET /api/data
```

### Get by Category
```javascript
GET /api/category?type=foods
```

### Search Items
```javascript
GET /api/search?q=tea&category=foods
```

## 🔥 Fitur yang Tersedia

### Frontend (Static)
- ✅ Desain modern dengan gradien
- ✅ Responsive design
- ✅ 6 kategori data
- ✅ Search dan filter
- ✅ Format harga bintang
- ✅ Informasi lengkap (lokasi, waktu, cuaca)

### Backend (Supabase)
- ✅ Real-time database
- ✅ RESTful API
- ✅ Auto-scaling
- ✅ Global CDN
- ✅ CORS enabled
- ✅ Serverless functions

## 📊 Performance

### Frontend
- ⚡ Static files loading
- 🗂️ Optimized images
- 📱 Mobile responsive
- 🔒 HTTPS by default

### Backend
- 🚀 Serverless functions
- 💾 PostgreSQL database
- 🌍 Global edge locations
- 📈 Built-in analytics
- 🔐 Enterprise security

## 🛠️ Troubleshooting

### Common Issues
1. **CORS Error**: Pastikan environment variables ter-set dengan benar
2. **Database Error**: Cek SQL syntax di Supabase editor
3. **Deploy Error**: Pastikan `vercel.json` format valid

### Debug Commands
```bash
# Cek environment variables
vercel env ls

# Cek deployment logs
vercel logs

# Test API locally
vercel dev
```

## 🎨 Customization

### Tambah Custom Domain
1. Vercel Dashboard → Project → Settings → Domains
2. Tambah custom domain
3. Setup DNS records

### Custom Analytics
1. Supabase Dashboard → Analytics
2. Track user interactions
3. Monitor performance

## 📈 Next Steps

1. **Real-time Updates**: Gunakan Supabase realtime
2. **User Authentication**: Tambah login/logout
3. **Data Management**: CRUD operations
4. **Performance**: Implement caching
5. **SEO**: Meta tags dan sitemap

## 🎉 Result

Setelah setup selesai:
- 🌐 **Production URL**: `https://your-project.vercel.app`
- 🔗 **API URL**: `https://your-project.vercel.app/api/`
- 💾 **Database**: Real-time PostgreSQL
- 📊 **Analytics**: Built-in dashboard
- 🚀 **Global CDN**: Automatic scaling

Aplikasi Heartopia Guide siap digunakan globally! 🌟✨
