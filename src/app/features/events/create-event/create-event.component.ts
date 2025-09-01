import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- Hero Section -->
    <section class="pt-24 pb-16 bg-gradient-to-br from-brand-50 via-warm-50 to-cozy-50">
      <div class="container mx-auto px-4 md:px-6 text-center">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Etkinlik
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-cozy-500"
              >Oluşturun</span
            >
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Özel anlarınız için QR kod oluşturun ve katılımcılarla paylaşın! 📱✨
          </p>
        </div>
      </div>
    </section>

    <!-- Create Event Form -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-2xl mx-auto">
          <div class="card">
            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Etkinlik Bilgileri 🎉</h2>

            <form (ngSubmit)="onSubmit()" class="space-y-6">
              <!-- Event Name -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"> Etkinlik Adı * </label>
                <input
                  type="text"
                  [(ngModel)]="eventForm.name"
                  name="name"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                  placeholder="Örn: Ahmet & Ayşe Düğünü"
                  required
                />
              </div>

              <!-- Event Date -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Etkinlik Tarihi *
                </label>
                <input
                  type="date"
                  [(ngModel)]="eventForm.date"
                  name="date"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <!-- Event Type -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Etkinlik Türü *
                </label>
                <select
                  [(ngModel)]="eventForm.type"
                  name="type"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                  required
                >
                  <option value="">Etkinlik türü seçin</option>
                  <option value="wedding">Düğün</option>
                  <option value="birthday">Doğum Günü</option>
                  <option value="graduation">Mezuniyet</option>
                  <option value="anniversary">Yıldönümü</option>
                  <option value="party">Parti</option>
                  <option value="meeting">Toplantı</option>
                  <option value="other">Diğer</option>
                </select>
              </div>

              <!-- Event Description -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"> Açıklama </label>
                <textarea
                  [(ngModel)]="eventForm.description"
                  name="description"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Etkinliğiniz hakkında kısa bir açıklama..."
                ></textarea>
              </div>

              <!-- Privacy Settings -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Gizlilik Ayarları
                </label>
                <div class="space-y-3">
                  <div class="flex items-center">
                    <input
                      type="radio"
                      [(ngModel)]="eventForm.privacy"
                      name="privacy"
                      value="public"
                      id="public"
                      class="w-4 h-4 text-brand-500 border-gray-300 focus:ring-brand-500"
                    />
                    <label for="public" class="ml-2 text-sm text-gray-700">
                      <span class="font-medium">Herkese Açık</span> - QR kodu bilen herkes fotoğraf
                      yükleyebilir
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="radio"
                      [(ngModel)]="eventForm.privacy"
                      name="privacy"
                      value="private"
                      id="private"
                      class="w-4 h-4 text-brand-500 border-gray-300 focus:ring-brand-500"
                    />
                    <label for="private" class="ml-2 text-sm text-gray-700">
                      <span class="font-medium">Özel</span> - Sadece davet edilenler fotoğraf
                      yükleyebilir
                    </label>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="btn bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:from-brand-600 hover:to-brand-700 transform hover:scale-105 transition-all duration-200 shadow-lg w-full"
                [disabled]="isLoading()"
              >
                <svg
                  *ngIf="!isLoading()"
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
                <svg
                  *ngIf="isLoading()"
                  class="w-5 h-5 mr-2 animate-spin"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
                {{ isLoading() ? 'Oluşturuluyor...' : 'Etkinlik Oluştur' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 bg-gradient-to-br from-warm-50 to-brand-50">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Nasıl Çalışır? 🤔</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Etkinliğinizi oluşturduktan sonra yapmanız gerekenler
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
            <p class="text-gray-600">Yukarıdaki formu doldurun ve etkinliğinizi oluşturun</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-warm-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
            >
              2
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">QR Kodu Alın 📱</h3>
            <p class="text-gray-600">Otomatik olarak oluşturulan QR kodu indirin</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-cozy-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
            >
              3
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Paylaşın ve Toplayın ✨</h3>
            <p class="text-gray-600">
              QR kodu katılımcılarla paylaşın, fotoğraflar otomatik toplansın!
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class CreateEventComponent {
  isLoading = signal(false);

  eventForm = {
    name: '',
    date: '',
    type: '',
    description: '',
    privacy: 'public',
  };

  onSubmit() {
    if (this.isFormValid()) {
      this.isLoading.set(true);

      // Simulate API call
      setTimeout(() => {
        console.log('Event created:', this.eventForm);
        this.isLoading.set(false);
        // TODO: Navigate to event details page
      }, 2000);
    }
  }

  private isFormValid(): boolean {
    return !!this.eventForm.name && !!this.eventForm.date && !!this.eventForm.type;
  }
}
