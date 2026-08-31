# Telefon Uygulama İkonu Rehberi

Ana ekrandaki **yuvarlak ikon** bu dosyalardan gelir.

## Hangi dosyaları oluşturacaksın?

`public/icons/` klasörüne şu **3 PNG** dosyasını koy:

| Dosya | Boyut | Ne için |
|-------|-------|---------|
| `icon-192.png` | 192×192 px | Android küçük ikon |
| `icon-512.png` | 512×512 px | Android büyük ikon, splash |
| `icon-512-maskable.png` | 512×512 px | Android yuvarlak/kare kırpma |
| `apple-touch-icon.png` | 180×180 px | iPhone (public/ kökünde) |

## Tasarım ipuçları

1. **Kare çiz, telefon yuvarlak yapar** — Android/iOS köşeleri otomatik keser
2. **Önemli şeyi ortada tut** — kenarlara yapıştırma, yuvarlak kesilince gider
3. **Maskable ikon:** içeriği merkezin %80'inde bırak (güvenli alan)
4. Oyun teması: koyu yeşil/siyah arka plan + sarı ⚗️ veya Heisenberg silüeti

## Nasıl yaparsın? (Canva — ücretsiz)

1. [canva.com](https://canva.com) → **512×512** tasarım oluştur
2. Arka plan: `#0a0f0a`, ikon/emoji/text: `#f5c518`
3. İndir → **PNG**
4. [squoosh.app](https://squoosh.app) veya Canva'dan boyutları export et:
   - 512×512 → `icon-512.png` ve `icon-512-maskable.png` (aynı veya maskable'da daha fazla padding)
   - 192×192 → `icon-192.png`
   - 180×180 → `apple-touch-icon.png` (public/ içine)

## Şablon dosyası

`icon-template.svg` — Inkscape/Figma'da açıp kendi tasarımınla değiştir, PNG export al.

SVG → PNG online: [cloudconvert.com/svg-to-png](https://cloudconvert.com/svg-to-png)

## Test

1. `npm run build && npm run preview`
2. Telefonda siteyi aç (deploy edilmiş link veya local tunnel)
3. **Safari (iPhone):** Paylaş → Ana Ekrana Ekle
4. **Chrome (Android):** Menü → Ana ekrana ekle / Uygulama yükle

İkon görünmezse: dosya adlarını ve boyutları kontrol et, tarayıcı önbelleğini temizle.

## Renkler (oyunla uyumlu)

- Arka plan: `#0a0f0a`
- Vurgu sarı: `#f5c518`
- Yeşil: `#4ade80`
