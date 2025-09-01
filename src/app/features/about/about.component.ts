import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="pt-24 pb-16 bg-gradient-to-br from-brand-50 via-warm-50 to-cozy-50">
      <div class="container mx-auto px-4 md:px-6 text-center">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hakkımızda
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-cozy-500"
              >QR Hatıra</span
            >
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Anılarınızı korumak ve paylaşmak için yola çıktık. Her gülümseme, her kahkaha, her anı
            değerli! 💝
          </p>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Hikayemiz 📖</h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              2024 yılında, teknoloji ve insan bağlarını birleştiren bir platform hayal ettik.
              Düğünlerde, doğum günlerinde, mezuniyetlerde... Her özel anıda, sevdiklerimizle
              paylaştığımız fotoğrafların kaybolup gitmesini istemedik.
            </p>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              <span class="font-semibold text-brand-600">QR Hatıra</span> ile artık herkes kolayca
              fotoğraf yükleyebilir, anılar otomatik olarak toplanır ve güvenli bir şekilde
              saklanır. Teknik bilgi gerekmez, sadece telefonunuzu kaldırın! 📱
            </p>
            <div class="flex items-center space-x-4">
              <div class="flex items-center">
                <div class="w-3 h-3 bg-brand-500 rounded-full mr-2"></div>
                <span class="text-gray-700 font-medium">Kolay Kullanım</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-warm-500 rounded-full mr-2"></div>
                <span class="text-gray-700 font-medium">Güvenli Saklama</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-cozy-500 rounded-full mr-2"></div>
                <span class="text-gray-700 font-medium">Anında Paylaşım</span>
              </div>
            </div>
          </div>
          <div class="relative">
            <div
              class="bg-gradient-to-br from-brand-100 to-warm-100 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500"
            >
              <div class="bg-white rounded-2xl p-6 shadow-xl">
                <div class="flex items-center space-x-3 mb-4">
                  <img src="/qrhatira.png" alt="QR Hatıra" class="w-10 h-10 rounded-full" />
                  <div>
                    <h3 class="font-semibold text-gray-900">QR Hatıra</h3>
                    <p class="text-sm text-gray-500">Anılarınızı koruyoruz</p>
                  </div>
                </div>
                <p class="text-gray-600 text-sm leading-relaxed">
                  "Her anı değerli, her gülümseme kaydedilmeye değer. QR Hatıra ile anılarınız
                  güvende! 💝"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-20 bg-gradient-to-br from-warm-50 to-brand-50">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid md:grid-cols-2 gap-8">
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Misyonumuz 🎯</h3>
            <p class="text-gray-600 leading-relaxed">
              Teknolojiyi kullanarak insanların özel anılarını korumak, paylaşmak ve gelecek
              nesillere aktarmak. Her anı değerli, her gülümseme kaydedilmeye değer!
            </p>
          </div>

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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz 🔮</h3>
            <p class="text-gray-600 leading-relaxed">
              Dünyanın en güvenilir ve kullanıcı dostu anı toplama platformu olmak. Her etkinlikte,
              her kutlamada, her özel günde QR Hatıra kullanılsın!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Değerlerimiz ⭐</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Her kararımızı ve her özelliğimizi şekillendiren temel değerler
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center group">
            <div
              class="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Güvenilirlik 🛡️</h3>
            <p class="text-gray-600">
              Anılarınız bizim için kutsal. En yüksek güvenlik standartlarıyla korunur.
            </p>
          </div>

          <div class="text-center group">
            <div
              class="w-16 h-16 bg-gradient-to-br from-warm-500 to-warm-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">İnovasyon 🚀</h3>
            <p class="text-gray-600">
              Sürekli gelişiyor, yeni özellikler ekliyor, kullanıcı deneyimini iyileştiriyoruz.
            </p>
          </div>

          <div class="text-center group">
            <div
              class="w-16 h-16 bg-gradient-to-br from-cozy-500 to-cozy-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Sevgi 💝</h3>
            <p class="text-gray-600">
              Her kullanıcımızı ailemizden biri gibi görüyor, en iyi hizmeti sunuyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-gradient-to-br from-cozy-50 to-warm-50">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Ekibimiz 👥</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            QR Hatıra'yı hayata geçiren tutkulu ve yaratıcı ekip
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="text-center group">
            <div
              class="w-24 h-24 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center"
            >
              <span class="text-2xl font-bold text-white">👨‍💻</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Ahmet Yılmaz</h3>
            <p class="text-brand-600 font-medium mb-2">Kurucu & CEO</p>
            <p class="text-gray-600 text-sm">
              Teknoloji tutkunu, anıları koruma misyonuyla yola çıktı
            </p>
          </div>

          <div class="text-center group">
            <div
              class="w-24 h-24 bg-gradient-to-br from-warm-400 to-warm-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center"
            >
              <span class="text-2xl font-bold text-white">👩‍🎨</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Zeynep Kaya</h3>
            <p class="text-warm-600 font-medium mb-2">Tasarım Direktörü</p>
            <p class="text-gray-600 text-sm">
              Kullanıcı deneyimini en üst seviyeye çıkarmaya odaklanıyor
            </p>
          </div>

          <div class="text-center group">
            <div
              class="w-24 h-24 bg-gradient-to-br from-cozy-400 to-cozy-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center"
            >
              <span class="text-2xl font-bold text-white">👨‍🔬</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Mehmet Demir</h3>
            <p class="text-cozy-600 font-medium mb-2">Teknik Lider</p>
            <p class="text-gray-600 text-sm">
              En son teknolojileri kullanarak güvenli altyapı kuruyor
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
      <div class="container mx-auto px-4 md:px-6 text-center">
        <h2 class="text-4xl font-bold mb-6">Bize Katılın! 🚀</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          QR Hatıra ailesinin bir parçası olun, anılarınızı koruyun ve sevdiklerinizle paylaşın!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            routerLink="/pricing"
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
            Hemen Başla
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
            İletişime Geçin
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class AboutComponent {}
