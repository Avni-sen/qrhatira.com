import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section
      class="min-h-screen bg-gradient-to-br from-warm-50 via-brand-50 to-cozy-50 flex items-center pt-16"
    >
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="text-center lg:text-left">
            <!-- Badge -->
            <div
              class="inline-flex items-center px-4 py-2 bg-warm-100 text-warm-700 rounded-full text-sm font-medium mb-6"
            >
              <img src="/qrhatira.png" alt="QR Hatıra" class="w-4 h-4 mr-2 rounded" />
              🎉 Yeni özellikler eklendi!
            </div>

            <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Anılarınızı
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-cozy-500"
              >
                kalıcı
              </span>
              kılın
            </h1>

            <p
              class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
            >
              Sevdiklerinizle paylaştığınız özel anları,
              <span class="font-semibold text-brand-600">QR kod</span> ile kolayca toplayın. Her
              gülümseme, her kahkaha, her anı değerli! 💝
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                class="btn bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:from-brand-600 hover:to-brand-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                Hemen Başla - Ücretsiz!
              </button>
              <button
                class="btn bg-white text-brand-600 border-2 border-brand-200 hover:bg-brand-50 hover:border-brand-300 transform hover:scale-105 transition-all duration-200 shadow-md"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Nasıl Çalışır?
              </button>
            </div>

            <!-- Trust Indicators -->
            <div
              class="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-gray-500"
            >
              <div class="flex items-center">
                <svg class="w-5 h-5 text-warm-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                1000+ Mutlu Kullanıcı
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-warm-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                %99.9 Uptime
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-warm-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                7/24 Destek
              </div>
            </div>
          </div>

          <!-- Right Content - Section Image -->
          <div class="relative">
            <div class="relative">
              <img
                src="/section.png"
                alt="QR Hatıra - Etkinlik Anları"
                class="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <!-- Floating Elements -->
              <div
                class="absolute -top-4 -left-4 w-8 h-8 bg-warm-400 rounded-full animate-bounce"
              ></div>
              <div
                class="absolute -bottom-4 -right-4 w-6 h-6 bg-cozy-400 rounded-full animate-pulse"
              ></div>
              <div
                class="absolute top-1/2 -left-6 w-4 h-4 bg-brand-400 rounded-full animate-ping"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Neden <span class="text-brand-500">QR Hatıra</span>?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Çünkü her anınız değerli ve her gülümseme kaydedilmeye değer! 😊
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            class="card text-center group hover:transform hover:scale-105 transition-all duration-300"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-warm-100 to-warm-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-warm-200 group-hover:to-warm-300 transition-all duration-300"
            >
              <svg
                class="w-10 h-10 text-warm-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Çocuk Oyuncağı 🎯</h3>
            <p class="text-gray-600 leading-relaxed">
              QR kod ile tek tıkla fotoğraf yükleme! Büyükanneniz bile kullanabilir. Teknik bilgi
              gerekmez, sadece telefonunuzu kaldırın ve çekin! 📱
            </p>
          </div>

          <div
            class="card text-center group hover:transform hover:scale-105 transition-all duration-300"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-brand-100 to-brand-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-brand-200 group-hover:to-brand-300 transition-all duration-300"
            >
              <svg
                class="w-10 h-10 text-brand-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Orijinal Kalite 🎨</h3>
            <p class="text-gray-600 leading-relaxed">
              Fotoğraflarınız sıkıştırılmadan,
              <span class="font-semibold text-brand-600">orijinal kalitesinde</span> saklanır. Her
              detay, her renk, her anı korunur! ✨
            </p>
          </div>

          <div
            class="card text-center group hover:transform hover:scale-105 transition-all duration-300"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-cozy-100 to-cozy-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-cozy-200 group-hover:to-cozy-300 transition-all duration-300"
            >
              <svg
                class="w-10 h-10 text-cozy-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Güvenli Saklama 🔒</h3>
            <p class="text-gray-600 leading-relaxed">
              Google Drive ile güvenli ve erişilebilir depolama. Anılarınız bulutlarda güvende,
              istediğiniz zaman erişebilirsiniz! ☁️
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-20 bg-gradient-to-br from-warm-50 to-brand-50">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nasıl Çalışır? 🤔</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Sadece 3 basit adımda anılarınızı toplamaya başlayın!
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-brand-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
            >
              1
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Etkinlik Oluşturun 🎉</h3>
            <p class="text-gray-600">
              Etkinliğiniz için özel bir QR kod oluşturun. Sadece birkaç tıklama!
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-warm-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
            >
              2
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">QR Kodu Paylaşın 📱</h3>
            <p class="text-gray-600">
              Katılımcılarla QR kodu paylaşın. WhatsApp, Instagram, her yerde!
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-cozy-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
            >
              3
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Anıları Toplayın ✨</h3>
            <p class="text-gray-600">
              Herkes fotoğraflarını yüklesin, anılarınız otomatik toplansın!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
      <div class="container mx-auto px-4 md:px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">Anılarınızı Koruyun! 💝</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Bir sonraki etkinliğinizde tüm anıları tek yerden toplayın. Düğünler, doğum günleri,
          mezuniyetler... Her anı değerli! 🎊
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
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
            Hemen Başla - Ücretsiz!
          </button>
          <button
            class="btn bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-600 transform hover:scale-105 transition-all duration-200"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
            Demo İzle
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class LandingComponent {}
