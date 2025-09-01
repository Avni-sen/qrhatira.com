import { Component, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-public-upload',
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
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-cozy-500 to-brand-500"
              >{{ eventName() }}</span
            >
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bu etkinlikte yaşanan anıları paylaşın! 📸✨
          </p>
        </div>
      </div>
    </section>

    <!-- Upload Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-2xl mx-auto">
          <div class="card">
            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Fotoğraf Yükle 📱</h2>

            <!-- Upload Form -->
            <form (ngSubmit)="onSubmit()" class="space-y-6">
              <!-- Name Input -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Adınız (İsteğe bağlı)
                </label>
                <input
                  type="text"
                  [(ngModel)]="uploadForm.name"
                  name="name"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                  placeholder="Fotoğrafınızı imzalamak isterseniz adınızı yazın"
                />
              </div>

              <!-- Message Input -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Mesajınız (İsteğe bağlı)
                </label>
                <textarea
                  [(ngModel)]="uploadForm.message"
                  name="message"
                  rows="3"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Bu anı hakkında bir şeyler yazın..."
                ></textarea>
              </div>

              <!-- File Upload -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Fotoğraf Seçin *
                </label>
                <div
                  class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-brand-400 transition-colors duration-200"
                >
                  <input
                    type="file"
                    (change)="onFileSelected($event)"
                    accept="image/*"
                    class="hidden"
                    id="fileInput"
                    multiple
                  />
                  <label for="fileInput" class="cursor-pointer">
                    <svg
                      class="w-12 h-12 text-gray-400 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p class="text-lg font-medium text-gray-900 mb-2">
                      Fotoğraf yüklemek için tıklayın
                    </p>
                    <p class="text-sm text-gray-500">
                      PNG, JPG, JPEG dosyaları kabul edilir (max 10MB)
                    </p>
                  </label>
                </div>
              </div>

              <!-- Selected Files Preview -->
              <div *ngIf="selectedFiles().length > 0" class="space-y-3">
                <h3 class="text-sm font-medium text-gray-700">Seçilen Fotoğraflar:</h3>
                <div class="grid grid-cols-2 gap-3">
                  <div
                    *ngFor="let file of selectedFiles(); trackBy: trackByFile"
                    class="relative group"
                  >
                    <img
                      [src]="getFilePreview(file)"
                      [alt]="file.name"
                      class="w-full h-24 object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      type="button"
                      (click)="removeFile(file)"
                      class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-red-600 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="btn bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:from-brand-600 hover:to-brand-700 transform hover:scale-105 transition-all duration-200 shadow-lg w-full"
                [disabled]="isLoading() || selectedFiles().length === 0"
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
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
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
                {{ isLoading() ? 'Yükleniyor...' : 'Fotoğrafları Yükle' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Message -->
    <div
      *ngIf="uploadSuccess()"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <div class="bg-white rounded-2xl p-8 max-w-md mx-auto text-center">
        <div
          class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Başarıyla Yüklendi! 🎉</h3>
        <p class="text-gray-600 mb-6">Fotoğraflarınız etkinlik albümüne eklendi. Teşekkürler!</p>
        <button
          (click)="closeSuccess()"
          class="btn bg-brand-500 text-white hover:bg-brand-600 w-full"
        >
          Tamam
        </button>
      </div>
    </div>
  `,
  styles: [],
})
export class PublicUploadComponent implements OnDestroy {
  isLoading = signal(false);
  uploadSuccess = signal(false);
  eventName = signal('Etkinlik');

  selectedFiles = signal<File[]>([]);
  private fileUrls: string[] = [];

  uploadForm = {
    name: '',
    message: '',
  };

  constructor(private route: ActivatedRoute) {
    // Get event name from route params
    this.route.params.subscribe((params) => {
      if (params['eventSlug']) {
        // TODO: Fetch event details from API
        this.eventName.set('Ahmet & Ayşe Düğünü');
      }
    });
  }

  ngOnDestroy(): void {
    // Clean up file URLs to prevent memory leaks
    this.fileUrls.forEach((url) => URL.revokeObjectURL(url));
    this.fileUrls = [];
  }

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      const files: File[] = Array.from(target.files);
      this.selectedFiles.update((current) => [...current, ...files]);
    }
  }

  removeFile(file: File): void {
    this.selectedFiles.update((current) => current.filter((f) => f !== file));
  }

  trackByFile(index: number, file: File): string {
    return file.name + file.size + file.lastModified;
  }

  getFilePreview(file: File): string {
    const url = URL.createObjectURL(file);
    this.fileUrls.push(url);
    return url;
  }

  onSubmit(): void {
    if (this.selectedFiles().length > 0) {
      this.isLoading.set(true);

      // Simulate API call
      setTimeout(() => {
        console.log('Uploading files:', this.selectedFiles());
        console.log('Form data:', this.uploadForm);

        this.isLoading.set(false);
        this.uploadSuccess.set(true);

        // Reset form
        this.selectedFiles.set([]);
        this.uploadForm = { name: '', message: '' };
      }, 2000);
    }
  }

  closeSuccess(): void {
    this.uploadSuccess.set(false);
  }
}
