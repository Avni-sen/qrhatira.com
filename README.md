# 🎯 QR Hatıra

**Anınızı, herkesin kamerasıyla tek bir yerde**

QR Hatıra, etkinliklerinizde katılımcıların çektiği fotoğraf ve videoları otomatik olarak toplayan modern bir web uygulamasıdır.

## ✨ Özellikler

- 🚀 **Kolay Kullanım**: QR kod ile tek tıkla fotoğraf yükleme
- 🎨 **Orijinal Kalite**: Fotoğraflar sıkıştırılmadan saklanır
- 🔒 **Güvenli Saklama**: Google Drive entegrasyonu
- 📱 **Responsive Design**: Tüm cihazlarda mükemmel görünüm
- 🎯 **Etkinlik Yönetimi**: Kolay etkinlik oluşturma ve yönetimi

## 🛠️ Teknolojiler

- **Frontend**: Angular 20 (Standalone Components)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **State Management**: Angular Signals + NgRx v20
- **Forms**: Reactive Forms
- **Icons**: Tabler Icons

## 🚀 Hızlı Başlangıç

### Gereksinimler

- Node.js 20+
- npm 8+

### Kurulum

```bash
# Projeyi klonlayın
git clone <repository-url>
cd qrhatira

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run start

# Tarayıcıda açın
open http://localhost:4200
```

### Build

```bash
# Production build
npm run build

# Build'i test edin
npm run preview
```

## 📁 Proje Yapısı

```
src/
├── app/
│   ├── features/           # Feature components
│   │   ├── landing/        # Ana sayfa
│   │   ├── pricing/        # Paketler
│   │   ├── about/          # Hakkımızda
│   │   ├── contact/        # İletişim
│   │   ├── events/         # Etkinlik yönetimi
│   │   └── uploads/        # Fotoğraf yükleme
│   ├── shared/             # Shared components
│   │   ├── ui/             # UI components
│   │   └── data-access/    # Data services
│   ├── core/               # Core services
│   ├── models/             # TypeScript interfaces
│   └── guards/             # Route guards
├── assets/                 # Static assets
├── environments/           # Environment configs
└── styles/                 # Global styles
```

## 🎨 UI/UX Kuralları

### Renkler

- **Primary**: `#4c6aff` (Brand 500)
- **Secondary**: `#2f4ee6` (Brand 600)
- **Accent**: `#223cb4` (Brand 700)

### Tipografi

- **Display**: `text-5xl/normal md:text-6xl`
- **Body**: `text-base md:text-lg`

### Components

- **Button**: `.btn` utility class
- **Card**: `.card` utility class
- **Focus Ring**: `.focus-ring` utility class

## 🔧 Environment Variables

```bash
# src/environments/environment.ts
NG_APP_GOOGLE_CLIENT_ID=
NG_APP_GOOGLE_DRIVE_PARENT_FOLDER_ID=
NG_APP_API_BASE_URL=http://localhost:3000
```

## 📱 Sayfalar

- `/` - Ana sayfa (Landing)
- `/about` - Hakkımızda
- `/contact` - İletişim
- `/pricing` - Paketler
- `/dashboard/events/create` - Etkinlik oluştur
- `/u/:eventSlug` - Fotoğraf yükleme

## 🧪 Test

```bash
# Unit tests
npm run test

# E2E tests
npm run e2e

# Test coverage
npm run test:coverage
```

## 📦 Paketler

### Basic (Ücretsiz)

- 1 Etkinlik
- 50 Fotoğraf
- Temel QR Kod

### Plus (₺99/ay)

- 5 Etkinlik
- 500 Fotoğraf
- Özel QR Kod
- E-posta Desteği

### Pro (₺199/ay)

- Sınırsız Etkinlik
- Sınırsız Fotoğraf
- Özel Tasarım
- Öncelikli Destek

## 🔐 Güvenlik

- Input validation
- XSS koruması
- CSRF koruması
- Environment-based configuration

## 🚀 Deployment

### Vercel

```bash
# Vercel CLI ile deploy
vercel --prod
```

### Manual Build

```bash
npm run build
# dist/ klasörünü web sunucusuna yükleyin
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Website**: [qrhatira.com](https://qrhatira.com)
- **E-posta**: info@qrhatira.com
- **GitHub**: [github.com/qrhatira](https://github.com/qrhatira)

## 🙏 Teşekkürler

- Angular Team
- Tailwind CSS Team
- Tüm katkıda bulunanlara

---

**QR Hatıra** - Anılarınızı koruyun! 🎉
