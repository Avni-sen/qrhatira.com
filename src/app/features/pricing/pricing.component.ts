import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="pt-24 pb-16 bg-gradient-to-br from-brand-50 via-warm-50 to-cozy-50">
      <div class="container mx-auto px-4 md:px-6 text-center">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-cozy-500"
              >Paketler</span
            >
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            İhtiyacınıza en uygun paketi seçin ve anılarınızı korumaya başlayın! 💝
          </p>
        </div>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Free Plan -->
          <div
            class="card text-center group hover:transform hover:scale-105 transition-all duration-300 border-2 border-gray-100"
          >
            <div class="mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Ücretsiz 🎁</h3>
              <div class="text-4xl font-bold text-gray-900 mb-2">₺0</div>
              <p class="text-gray-600">Aylık</p>
            </div>

            <ul class="space-y-4 mb-8 text-left">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                100 fotoğraf
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                5 etkinlik
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Temel QR kod
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                E-posta desteği
              </li>
            </ul>

            <a
              routerLink="/dashboard/events/create"
              class="btn bg-gray-100 text-gray-700 hover:bg-gray-200 w-full"
            >
              Ücretsiz Başla
            </a>
          </div>

          <!-- Premium Plan -->
          <div
            class="card text-center group hover:transform hover:scale-105 transition-all duration-300 border-2 border-brand-500 relative"
          >
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-brand-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                En Popüler ⭐
              </span>
            </div>

            <div class="mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Premium 🚀</h3>
              <div class="text-4xl font-bold text-brand-600 mb-2">₺29</div>
              <p class="text-gray-600">Aylık</p>
            </div>

            <ul class="space-y-4 mb-8 text-left">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Sınırsız fotoğraf
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Sınırsız etkinlik
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Özel QR kod tasarımı
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Öncelikli destek
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Gelişmiş analitik
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Reklamsız deneyim
              </li>
            </ul>

            <a
              routerLink="/dashboard/events/create"
              class="btn bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:from-brand-600 hover:to-brand-700 w-full"
            >
              Premium'a Geç
            </a>
          </div>

          <!-- Enterprise Plan -->
          <div
            class="card text-center group hover:transform hover:scale-105 transition-all duration-300 border-2 border-gray-100"
          >
            <div class="mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Kurumsal 🏢</h3>
              <div class="text-4xl font-bold text-gray-900 mb-2">₺99</div>
              <p class="text-gray-600">Aylık</p>
            </div>

            <ul class="space-y-4 mb-8 text-left">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Premium özellikler
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Çoklu kullanıcı
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                API erişimi
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Özel entegrasyon
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                7/24 telefon desteği
              </li>
            </ul>

            <a routerLink="/contact" class="btn bg-gray-100 text-gray-700 hover:bg-gray-200 w-full">
              İletişime Geçin
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gradient-to-br from-warm-50 to-brand-50">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Sık Sorulan Sorular ❓</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Paketler hakkında merak edilenler</p>
        </div>

        <div class="max-w-3xl mx-auto space-y-6">
          <div class="card group hover:shadow-xl transition-all duration-300">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              Paket değişikliği yapabilir miyim? 🔄
            </h3>
            <p class="text-gray-600">
              Evet! İstediğiniz zaman paketinizi yükseltebilir veya düşürebilirsiniz. Değişiklik bir
              sonraki fatura döneminde geçerli olur.
            </p>
          </div>

          <div class="card group hover:shadow-xl transition-all duration-300">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">İptal edebilir miyim? ❌</h3>
            <p class="text-gray-600">
              Tabii ki! İstediğiniz zaman aboneliğinizi iptal edebilirsiniz. Mevcut fotoğraflarınız
              silinmez, sadece yeni yükleme yapamazsınız.
            </p>
          </div>

          <div class="card group hover:shadow-xl transition-all duration-300">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Ücretsiz deneme var mı? 🆓</h3>
            <p class="text-gray-600">
              Evet! Premium paketi 7 gün ücretsiz deneyebilirsiniz. Beğenmezseniz hiçbir ücret
              ödemezsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
      <div class="container mx-auto px-4 md:px-6 text-center">
        <h2 class="text-4xl font-bold mb-6">Hemen Başlayın! 🚀</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Anılarınızı korumaya başlayın, sevdiklerinizle paylaşın!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            routerLink="/dashboard/events/create"
            class="btn bg-white text-brand-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Ücretsiz Başla
          </a>
          <a
            routerLink="/contact"
            class="btn bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-600 transform hover:scale-105 transition-all duration-200"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            Soru Sorun
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class PricingComponent {}
