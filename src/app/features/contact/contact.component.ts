import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- Hero Section -->
    <section class="pt-24 pb-16 bg-gradient-to-br from-cozy-50 via-warm-50 to-brand-50">
      <div class="container mx-auto px-4 md:px-6 text-center">
        <div class="max-w-4xl mx-auto">
          <div class="flex justify-center mb-6">
            <img src="/qrhatira.png" alt="QR Hatıra Logo" class="w-16 h-16 rounded-2xl shadow-lg" />
          </div>
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            İletişime
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cozy-500 to-brand-500"
              >Geçin</span
            >
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sorularınız mı var? Yardıma mı ihtiyacınız var? Biz buradayız ve sizi dinlemeye hazırız!
            💬
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Mesaj Gönderin 📝</h2>
            <form class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Ad Soyad *</label>
                  <input
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">E-posta *</label>
                  <input
                    type="email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Konu *</label>
                <select
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Konu seçin</option>
                  <option value="general">Genel Bilgi</option>
                  <option value="support">Teknik Destek</option>
                  <option value="billing">Fatura & Ödeme</option>
                  <option value="feature">Özellik Önerisi</option>
                  <option value="partnership">İş Ortaklığı</option>
                  <option value="other">Diğer</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Mesajınız *</label>
                <textarea
                  rows="6"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>

              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  class="w-4 h-4 text-brand-500 border-gray-300 rounded focus:ring-brand-500"
                />
                <label for="newsletter" class="ml-2 text-sm text-gray-600">
                  Yeni özellikler ve güncellemelerden haberdar olmak istiyorum 📧
                </label>
              </div>

              <button
                type="submit"
                class="btn bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:from-brand-600 hover:to-brand-700 transform hover:scale-105 transition-all duration-200 shadow-lg w-full"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
                Mesajı Gönder
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-8">Bize Ulaşın 📞</h2>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                Herhangi bir sorunuz mu var? Size yardımcı olmaktan mutluluk duyarız! Aşağıdaki
                kanallardan bize ulaşabilirsiniz.
              </p>
            </div>

            <!-- Contact Methods -->
            <div class="space-y-6">
              <div class="flex items-start space-x-4 group">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-brand-100 to-brand-200 rounded-xl flex items-center justify-center group-hover:from-brand-200 group-hover:to-brand-300 transition-all duration-300"
                >
                  <svg
                    class="w-6 h-6 text-brand-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">E-posta</h3>
                  <p class="text-gray-600 mb-1">info@qrhatira.com</p>
                  <p class="text-gray-600 mb-1">destek@qrhatira.com</p>
                  <p class="text-sm text-gray-500">24 saat içinde yanıt veriyoruz</p>
                </div>
              </div>

              <div class="flex items-start space-x-4 group">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-warm-100 to-warm-200 rounded-xl flex items-center justify-center group-hover:from-warm-200 group-hover:to-warm-300 transition-all duration-300"
                >
                  <svg
                    class="w-6 h-6 text-warm-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Telefon</h3>
                  <p class="text-gray-600 mb-1">+90 (212) 555 0123</p>
                  <p class="text-gray-600 mb-1">+90 (532) 555 0123</p>
                  <p class="text-sm text-gray-500">Pazartesi - Cuma: 09:00 - 18:00</p>
                </div>
              </div>

              <div class="flex items-start space-x-4 group">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-cozy-100 to-cozy-200 rounded-xl flex items-center justify-center group-hover:from-cozy-200 group-hover:to-cozy-300 transition-all duration-300"
                >
                  <svg
                    class="w-6 h-6 text-cozy-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Adres</h3>
                  <p class="text-gray-600 mb-1">Levent Mahallesi</p>
                  <p class="text-gray-600 mb-1">Büyükdere Caddesi No:123</p>
                  <p class="text-gray-600 mb-1">Şişli / İstanbul</p>
                  <p class="text-sm text-gray-500">Türkiye</p>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Sosyal Medya 📱</h3>
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="w-10 h-10 bg-gray-100 hover:bg-brand-500 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <svg
                    class="w-5 h-5 text-gray-600 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 bg-gray-100 hover:bg-brand-500 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <svg
                    class="w-5 h-5 text-gray-600 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 bg-gray-100 hover:bg-brand-500 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <svg
                    class="w-5 h-5 text-gray-600 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 bg-gray-100 hover:bg-brand-500 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <svg
                    class="w-5 h-5 text-gray-600 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gradient-to-br from-warm-50 to-brand-50">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Sık Sorulan Sorular ❓</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            En çok merak edilen sorular ve cevapları
          </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-6">
          <div class="card group hover:shadow-xl transition-all duration-300">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">QR Hatıra nasıl çalışır? 🤔</h3>
            <p class="text-gray-600">
              Etkinliğiniz için özel bir QR kod oluşturun, katılımcılarla paylaşın. Herkes
              telefonunu kaldırıp QR kodu okutarak fotoğraf yükleyebilir. Anılarınız otomatik olarak
              toplanır ve güvenli bir şekilde saklanır!
            </p>
          </div>

          <div class="card group hover:shadow-xl transition-all duration-300">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Fotoğraflarım güvende mi? 🔒</h3>
            <p class="text-gray-600">
              Kesinlikle! Google Drive ile güvenli depolama, şifreli bağlantılar ve sadece sizin
              erişiminizde olan özel klasörler. Anılarınız bizim için kutsal!
            </p>
          </div>

          <div class="card group hover:shadow-xl transition-all duration-300">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Teknik bilgi gerekir mi? 📱</h3>
            <p class="text-gray-600">
              Hayır! Büyükanneniz bile kullanabilir. Sadece telefonunuzu kaldırın, QR kodu okutun ve
              fotoğraf çekin. Bu kadar basit! Karmaşık ayarlar, indirmeler yok.
            </p>
          </div>

          <div class="card group hover:shadow-xl transition-all duration-300">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              Kaç fotoğraf yükleyebilirim? 📸
            </h3>
            <p class="text-gray-600">
              Paketinize göre değişir. Ücretsiz pakette 100 fotoğraf, Premium pakette sınırsız! Her
              fotoğraf orijinal kalitesinde saklanır.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-cozy-500 via-cozy-600 to-cozy-700 text-white">
      <div class="container mx-auto px-4 md:px-6 text-center">
        <h2 class="text-4xl font-bold mb-6">Hala Sorunuz mu Var? 💭</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Canlı destek ekibimiz size yardımcı olmaya hazır! Hemen iletişime geçin, en kısa sürede
          yanıtlayalım.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="btn bg-white text-cozy-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            Canlı Destek
          </button>
          <a
            routerLink="/pricing"
            class="btn bg-transparent text-white border-2 border-white hover:bg-white hover:text-cozy-600 transform hover:scale-105 transition-all duration-200"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            Paketleri İncele
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ContactComponent {}
