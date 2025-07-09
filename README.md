# 🚀 Modern Portfolio Website

Yeni mezun bilgisayar mühendisleri için tasarlanmış modern, responsive ve etkileyici portfolio web sitesi.

## ✨ Özellikler

- 🎨 **Modern Tasarım**: Gradient renkler, animasyonlar ve glass effect'ler
- 📱 **Responsive**: Tüm cihazlarda mükemmel görünüm
- ⚡ **Hızlı**: Optimize edilmiş performans
- 🎭 **Animasyonlar**: Framer Motion ile smooth animasyonlar
- 🎯 **SEO Dostu**: Arama motorları için optimize edilmiş
- 🔧 **Kolay Özelleştirme**: Modüler yapı ile kolay düzenleme

## 🛠️ Teknolojiler

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS
- **Animasyonlar**: Framer Motion
- **İkonlar**: React Icons
- **Scroll**: React Intersection Observer
- **Build Tool**: Create React App

## 🚀 Kurulum

1. **Projeyi klonlayın**
```bash
git clone <repository-url>
cd portfolio
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm start
```

4. **Tarayıcıda açın**
```
http://localhost:3000
```

## 📁 Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   ├── Header.js       # Navigasyon menüsü
│   ├── Hero.js         # Ana sayfa hero bölümü
│   ├── About.js        # Hakkımda bölümü
│   ├── Skills.js       # Yetenekler bölümü
│   ├── Projects.js     # Projeler bölümü
│   ├── Experience.js   # Deneyim bölümü
│   ├── Contact.js      # İletişim bölümü
│   └── Footer.js       # Footer bölümü
├── App.js              # Ana uygulama bileşeni
├── index.js            # Uygulama giriş noktası
└── index.css           # Global stiller
```

## 🎨 Özelleştirme

### Renkler
`src/index.css` dosyasında CSS değişkenlerini düzenleyebilirsiniz:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  /* ... */
}
```

### İçerik
Her bileşen dosyasında kendi bilgilerinizi güncelleyebilirsiniz:

- **Kişisel Bilgiler**: `Hero.js`, `About.js`
- **Yetenekler**: `Skills.js`
- **Projeler**: `Projects.js`
- **Deneyim**: `Experience.js`
- **İletişim**: `Contact.js`

### Sosyal Medya Linkleri
Tüm bileşenlerde sosyal medya linklerini güncelleyin:

```javascript
const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  // ...
];
```

## 📱 Responsive Tasarım

Portfolio tüm cihazlarda mükemmel görünür:

- 📱 **Mobil**: 320px - 768px
- 📱 **Tablet**: 768px - 1024px
- 💻 **Desktop**: 1024px+

## 🎯 SEO Optimizasyonu

- Meta tag'ler optimize edildi
- Semantic HTML kullanıldı
- Alt text'ler eklendi
- Sayfa yükleme hızı optimize edildi

## 🚀 Deployment

### Netlify
1. Netlify hesabınıza giriş yapın
2. "New site from Git" seçin
3. Repository'nizi bağlayın
4. Build komutunu `npm run build` olarak ayarlayın
5. Deploy edin!

### Vercel
1. Vercel hesabınıza giriş yapın
2. "New Project" seçin
3. Repository'nizi import edin
4. Otomatik deploy!

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add some amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

Herhangi bir sorunuz varsa:
- Email: ornek@email.com
- LinkedIn: [LinkedIn Profili]
- GitHub: [GitHub Profili]

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın! 