import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <a routerLink="/" class="flex items-center space-x-3 group logo-hover">
              <img
                src="/qrhatira.png"
                alt="QR Hatıra Logo"
                class="w-10 h-10 rounded-lg transition-transform duration-200 group-hover:scale-110"
              />
              <span
                class="text-xl font-bold text-gray-900 group-hover:text-brand-500 transition-colors duration-200"
              >
                QR Hatıra
              </span>
            </a>
          </div>

          <!-- Navigation Menu -->
          <nav class="hidden md:flex items-center space-x-6">
            <a
              routerLink="/"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="nav-link"
            >
              Ana Sayfa
            </a>
            <a routerLink="/about" routerLinkActive="active" class="nav-link"> Hakkımızda </a>
            <a routerLink="/pricing" routerLinkActive="active" class="nav-link"> Paketler </a>
            <a routerLink="/contact" routerLinkActive="active" class="nav-link"> İletişim </a>
            <a routerLink="/dashboard/events/create" routerLinkActive="active" class="nav-link">
              Etkinlik Oluştur
            </a>
          </nav>

          <!-- CTA Buttons -->
          <div class="flex items-center space-x-4">
            <a
              routerLink="/dashboard/events/create"
              class="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors duration-200 hover:bg-brand-50 rounded-lg btn-hover"
            >
              Etkinlik Oluştur
            </a>
            <a
              routerLink="/pricing"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 btn-hover"
            >
              Başla
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            class="md:hidden p-2 rounded-md text-gray-600 hover:text-brand-500 hover:bg-gray-100 transition-colors duration-200 mobile-menu-btn"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {}
