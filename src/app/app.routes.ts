import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: 'QR Hatıra - Anınızı, herkesin kamerasıyla tek bir yerde',
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
    title: 'Hakkımızda - QR Hatıra',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then((m) => m.ContactComponent),
    title: 'İletişim - QR Hatıra',
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./features/pricing/pricing.component').then((m) => m.PricingComponent),
    title: 'Paketler - QR Hatıra',
  },
  {
    path: 'dashboard/events/create',
    loadComponent: () =>
      import('./features/events/create-event/create-event.component').then(
        (m) => m.CreateEventComponent
      ),
    title: 'Etkinlik Oluştur - QR Hatıra',
  },
  {
    path: 'u/:eventSlug',
    loadComponent: () =>
      import('./features/uploads/public-upload/public-upload.component').then(
        (m) => m.PublicUploadComponent
      ),
    title: 'Fotoğraf Yükle - QR Hatıra',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
