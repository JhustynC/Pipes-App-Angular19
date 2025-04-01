import { Injectable, signal } from '@angular/core';

export type AvailableLocal = 'es' | 'en' | 'fr';

@Injectable({ providedIn: 'root' })
export class LocalService {
  private currentLocal = signal<AvailableLocal>('es');
  constructor() {
    this.currentLocal.set(
      (localStorage.getItem('currentLocal') as AvailableLocal) ?? 'es'
    );
  }

  get getLocal() {
    return this.currentLocal();
  }

  set setLocal(val: AvailableLocal) {
    localStorage.setItem('currentLocal', val);
    this.currentLocal.set(val);
    window.location.reload();
  }
}
